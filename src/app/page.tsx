'use client';

import path from 'path'
import Markdown from 'react-markdown'
import Image from 'next/image'

import styles from './page.module.css'

type MdSections = {
  'about': string,
  'saber': string,
};

async function readMd(fileName: string): Promise<string> {
  const fs = require('fs');
  const { promises: { readFile } } = fs;

  const filePath = path.join(process.cwd(), 'src/sections', fileName);
  const contents = (await readFile(filePath)).toString();
  return contents;
}

export default async function () {
  return Home({
    about: await readMd('about.md'),
    saber: await readMd('saber.md'),
  });
}

function Home({ about, saber }: MdSections) {
  return (
    <>
      <a href='#top'>
        <Image
          src="/favicon.svg"
          alt="Adil's profile picture"
          width={500}
          height={500}
          className="pfp"
        />
      </a>
      <header id="top">
        <h1>Adil Hanney</h1>
        <p>Software Engineer</p>
      </header>
      <nav>
        <li>
          <a href="#saber">
            <Image
              src="https://raw.githubusercontent.com/saber-notes/saber/main/assets/icon/icon_macos.png"
              alt="Saber"
              width={1024}
              height={1024}
            />
          </a>
        </li>
        <li>
          <a href='#ricochlime'>
            <Image
              src="https://raw.githubusercontent.com/adil192/ricochlime/main/assets/icon/icon_macos.png"
              alt="Ricochlime"
              width={1024}
              height={1024}
            />
          </a>

        </li>
      </nav>
      <main>
        <section id="about">
          <div className='section-header'>
            <Image
              src="/favicon.svg"
              alt="Adil's profile picture"
              width={500}
              height={500}
              className='mock-mac-os-icon'
            />
            <h2>About me</h2>
          </div>
          <Markdown>{about}</Markdown>
        </section>

        <section id="saber">
          <div className='section-header'>
            <Image
              src="https://raw.githubusercontent.com/saber-notes/saber/main/assets/icon/icon_macos.png"
              alt="Saber"
              width={1024}
              height={1024}
            />
            <h2>Saber</h2>
          </div>
          <Markdown>{saber}</Markdown>
        </section>
      </main>
    </>
  )
}
