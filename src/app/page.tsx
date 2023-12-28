'use client';

import path from 'path'
import Markdown from 'react-markdown'
import Image from 'next/image'

import styles from './page.module.css'

type MdSections = {
  id: string,
  icon: React.ReactNode,
  header: string,
  content: string,
}[]


async function readMd(fileName: string): Promise<string> {
  const fs = require('fs');
  const { promises: { readFile } } = fs;

  const filePath = path.join(process.cwd(), 'src/sections', fileName);
  const contents = (await readFile(filePath)).toString();
  return contents;
}

export default async function () {
  return Home([
    {
      id: 'about',
      icon: <Image
        src="/favicon.svg"
        alt="Adil's profile picture"
        width={500}
        height={500}
        className='mock-mac-os-icon'
      />,
      header: 'About me',
      content: await readMd('about.md'),
    },
    {
      id: 'saber',
      icon: <Image
        src="https://raw.githubusercontent.com/saber-notes/saber/main/assets/icon/icon_macos.png"
        alt="Saber"
        width={1024}
        height={1024}
      />,
      header: 'Saber',
      content: await readMd('saber.md'),
    },
    {
      id: 'ricochlime',
      icon: <Image
        src="https://raw.githubusercontent.com/adil192/ricochlime/main/assets/icon/icon_macos.png"
        alt="Ricochlime"
        width={1024}
        height={1024}
      />,
      header: 'Ricochlime',
      content: await readMd('ricochlime.md'),
    },
  ])
}

function Home(sections: MdSections) {
  return (
    <>
      <a href='#about'>
        <Image
          src="/favicon.svg"
          alt="Adil's profile picture"
          width={500}
          height={500}
          className="pfp"
        />
      </a>
      <header>
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
        {sections.map(({ id, icon, header, content }) => (
          <section key={id} id={id}>
            <div className='section-header'>
              {icon}
              <h2>{header}</h2>
            </div>
            <Markdown>{content}</Markdown>
          </section>
        ))}
      </main>
    </>
  )
}
