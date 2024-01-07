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
  technologies: Technology[],
  content: string,
  date: string | undefined,
  images?: React.ReactNode[],
}

export function Section({ id, icon, header, technologies, content, date, images }: MdSection): JSX.Element {
  /*
   * If the dialog is open, the index of the image to show in the dialog.
   * If the dialog is closed, undefined.
   */
  const [dialogImage, setDialogImage] = useState<number | undefined>(undefined);

  return <section key={id} id={id}>
    <div className='section-header'>
      {icon}
      <h2>{header}</h2>
      <div className='technologies'>
        {technologies.map(technology => (
          <TechnologyIcon key={technology} technology={technology} />
        ))}
      </div>
    </div>

    <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>

    {date && <p className='date'>{date}</p>}

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
          <button
            className='section-dialog-close'
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
