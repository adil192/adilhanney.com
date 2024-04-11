import React from 'react';

import { Section } from './components/section.tsx';
import { sections } from './data.tsx';

export default function Home() {
  /** Scrolls the menu to match the main scroll position. */
  function onMainScroll(e: React.UIEvent<HTMLElement>) {
    const main = e.currentTarget;
    const menu = document.querySelector('menu');
    if (!menu) return;

    const percent = main.scrollTop / (main.scrollHeight - main.clientHeight);
    menu.scrollTop = percent * (menu.scrollHeight - menu.clientHeight);
  }

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
      <main onScroll={onMainScroll}>
        {sections.map((section) => (
          <Section key={section.id} {...section} />
        ))}
      </main>
    </>
  )
}
