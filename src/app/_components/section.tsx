'use client';

import Markdown from "react-markdown";
import { Technology, TechnologyIcon } from "./technology";
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
  const [dialogOpen, setDialogOpen] = useState(true);

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
      <button className='button' onClick={handleClickOpen}>View Images</button>
      <div className='section-images' onClick={handleClickOpen}>
        {images}
      </div>
      <Dialog
        fullScreen
        open={dialogOpen}
        onClose={handleClose}
      >
        <div className='section-images'>
          {images.map((image) => <div key={image?.toString()}>
            {image}
          </div>)}
        </div>
      </Dialog>
    </>}
  </section>
}
