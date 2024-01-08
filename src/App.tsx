import React from 'react';

import { Section } from './components/section.tsx';
import { sections } from './data.tsx';

export default function Home() {
  return (
    <>
      <a href='#about'>
        <img
          src="favicon.svg"
          alt="About me"
          width={96}
          height={100.85}
          className="pfp"
        />
      </a>
      <header>
        <h1>Adil Hanney</h1>
        <p>Software Engineer</p>
      </header>
      <menu>
        {sections
          .filter(({ id }) => id !== 'about')
          .map(({ id, icon }) => (
            <li key={id}>
              <a href={`#${id}`}>
                {icon}
              </a>
            </li>
          ))}
      </menu>
      <main>
        {sections.map((section) => (
          <Section key={section.id} {...section} />
        ))}
      </main>
    </>
  )
}
