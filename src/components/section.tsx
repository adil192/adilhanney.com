import React from 'react';
import Markdown from "react-markdown";
import { Technology, TechnologyIcon } from "./technology.tsx";
import remarkGfm from "remark-gfm";
import { Dialog } from "@mui/material";
import { useState } from "react";

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
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClickOpen = () => {
    console.log('click');
    setDialogOpen(true);
  }
  const handleClose = () => {
    setDialogOpen(false);
  }

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
          <div key={index} onClick={handleClickOpen}>
            {image}
          </div>
        ))}
      </div>
      <Dialog
        fullScreen
        open={dialogOpen}
        onClose={handleClose}
        className='section-dialog'
      >
        <div className='section-dialog-header'>
          <h2>{header}</h2>
          <button className='section-dialog-close' onClick={handleClose}>
            &#x2715;
          </button>
        </div>
        <div className='section-dialog-images'>
          {images}
        </div>
      </Dialog>
    </>}
  </section>
}
