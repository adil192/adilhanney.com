import React from 'react';
import Markdown from "react-markdown";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import remarkGfm from "remark-gfm";
import { Dialog } from "@mui/material";
import { useState } from "react";

import { Technology, TechnologyIcon } from "./technology.tsx";

export type MdSection = {
  id: string,
  icon: React.ReactNode,
  header: string,
  headerLink?: string,
  technologies: Technology[],
  content: string,
  date: string | undefined,
  images?: React.ReactNode[],
}

export function Section({ id, icon, header, headerLink, technologies, content, date, images }: MdSection): JSX.Element {
  /*
   * If the dialog is open, the index of the image to show in the dialog.
   * If the dialog is closed, undefined.
   */
  const [dialogImage, setDialogImage] = useState<number | undefined>(undefined);

  return <section key={id} id={id}>
    <div className='section-header'>
      {icon}
      <h2 className='flex-1'>{headerLink ? <a href={headerLink}>{header}</a> : header}</h2>
      <p className='date'>{date}</p>
      <div className='technologies flex-1 text-align-end'>
        {technologies.map(technology => (
          <TechnologyIcon key={technology} technology={technology} />
        ))}
      </div>
    </div>

    <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>

    {images && <>
      <div className='section-images'>
        {images.map((image, index) => (
          <div key={index} onClick={() => setDialogImage(index)}>
            {image}
          </div>
        ))}
      </div>
      <Dialog
        fullScreen
        open={dialogImage !== undefined}
        onClose={() => setDialogImage(undefined)}
        className='section-dialog'
      >
        <div className='section-dialog-header'>
          <h2>{header}</h2>
          <div className='section-dialog-nav'>
            <button
              className='section-dialog-button'
              onClick={() => {
                if (dialogImage === undefined) return;
                if (dialogImage <= 0) return;
                setDialogImage(dialogImage - 1);
              }}
              disabled={dialogImage === undefined || dialogImage === 0}>
              &#x25C0;
            </button>
            <p>{dialogImage !== undefined ? dialogImage + 1 : 0} / {images.length}</p>
            <button
              className='section-dialog-button'
              onClick={() => {
                if (dialogImage === undefined) return;
                if (dialogImage >= images.length - 1) return;
                setDialogImage(dialogImage + 1);
              }}
              disabled={dialogImage === undefined || dialogImage === images.length - 1}>
              &#x25B6;
            </button>
          </div>
          <div className='spacer' />
          <button
            className='section-dialog-button'
            onClick={() => setDialogImage(undefined)}>
            &#x2715;
          </button>
        </div>
        <TransformWrapper minScale={0.5}>
          <TransformComponent
            wrapperClass='section-dialog-wrapper'
            contentClass='section-dialog-content'>
            {images[dialogImage ?? 0]}
          </TransformComponent>
        </TransformWrapper>
      </Dialog>
    </>}
  </section>
}
