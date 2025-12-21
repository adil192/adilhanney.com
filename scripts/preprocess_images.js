/**
 * Preprocess images for the project.
 * 
 * This script finds external images (e.g. from GitHub), downloads them,
 * and converts them to webp for better performance.
 * 
 * This is done in two stages:
 * 1. Scan `src/` to find external image URLs:
 *     - Replace the URLs in the source files with local paths.
 *     - Record the external URLs for downloading.
 * 2. Download and convert the recorded images into `public/cached_images/`.
 */
// @ts-check

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const SRC_DIR = path.join(__dirname, '..', 'src');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'cached_images');
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

/**
 * @typedef {Object} ExternalImageData
 * @property {URL} externalUrl - The original external image URL.
 * @property {string} localFilename - The local filename where the image will be stored. This is relative to OUTPUT_DIR.
 */

/**
 * Recursively scans `src/` for external image URLs and replaces them with local paths.
 * @returns {ExternalImageData[]} List of external images to download.
 */
function scanSourceFiles() {
  /** @type {ExternalImageData[]} */
  const externalImages = [];

  const files = fs.readdirSync(SRC_DIR, { withFileTypes: true, recursive: true });
  for (const file of files) {
    if (!file.isFile()) continue;
    if (!file.name.endsWith('.js') && !file.name.endsWith('.jsx') && !file.name.endsWith('.ts') && !file.name.endsWith('.tsx')) {
      continue;
    }
    const filePath = path.join(file.parentPath, file.name);
    let content = fs.readFileSync(filePath, 'utf-8');
    let contentChanged = false;

    const regex = /https?:\/\/(raw\.githubusercontent\.com|user-images\.githubusercontent\.com)\/[^\s'"]+/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const externalUrlString = match[0];
      const externalUrl = new URL(externalUrlString);
      let ext = path.extname(externalUrl.pathname);
      if (ext === '.jpeg' || ext === '.jpg' || ext === '.png') ext = '.webp';
      const localFilename = _localFilenameFromUrl(externalUrl, ext);
      const webPath = `/cached_images/${localFilename}`;

      content = content.replace(externalUrlString, webPath);
      contentChanged = true;

      if (!externalImages.find(img => img.externalUrl.href === externalUrl.href)) {
        externalImages.push({ externalUrl, localFilename });
      }
    }

    if (contentChanged) fs.writeFileSync(filePath, content, 'utf-8');
  }

  return externalImages;
}

/**
 * Generates a local filename for the cached image based on its URL.
 * E.g. `https://raw.githubusercontent.com/USER/REPO/refs/heads/main/SOME_IMAGE.png`
 * becomes `USER_REPO_refs_heads_main_SOME_IMAGE.png`.
 * 
 * @param {URL} url
 * @param {string} desiredExt
 * @returns {string}
 */
function _localFilenameFromUrl(url, desiredExt) {
  const parts = url.pathname.split('/').filter(Boolean);
  const filenameWithOriginalExt = parts.join('_').replace(/\//g, '_');
  const filenameWithDesiredExt = filenameWithOriginalExt.replace(path.extname(filenameWithOriginalExt), desiredExt);
  return filenameWithDesiredExt;
}

/**
 * Downloads and converts external images to webp format.
 * @param {ExternalImageData[]} images List of external images to download.
 */
async function downloadAndConvertImages(images) {
  await Promise.all(images.map(({ externalUrl, localFilename }) => {
    const outputPath = path.join(OUTPUT_DIR, localFilename);
    return _downloadAndConvertImage(externalUrl, outputPath);
  }));
}

/**
 * @param {URL} externalUrl
 * @param {string} outputPath
 */
async function _downloadAndConvertImage(externalUrl, outputPath) {
  console.log(`Downloading and converting: ${externalUrl.href}`);
  const response = await fetch(externalUrl.href);
  if (!response.ok) {
    console.error(`Failed to download ${externalUrl.href}: ${response.statusText}`);
    return;
  }
  const imageData = await response.bytes();

  const desiredExt = path.extname(outputPath).toLowerCase();
  if (desiredExt === '.webp') {
    await sharp(imageData).toFormat('webp').toFile(outputPath);
  } else {
    fs.writeFileSync(outputPath, imageData);
  }

  const stats = fs.statSync(outputPath);
  console.log(`Compressed ${(imageData.length / 1024).toFixed(2)} KB -> ${(stats.size / 1024).toFixed(2)} KB: ${path.basename(outputPath)}`);
}

(async () => {
  const externalImages = scanSourceFiles();
  await downloadAndConvertImages(externalImages);
})();
