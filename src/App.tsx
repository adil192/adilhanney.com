import './App.css';

import React from 'react';

import { Technology } from './components/technology.tsx';
import { MdSection, Section } from './components/section.tsx';

function __readMd(mdFile: string): string {
  return mdFile;
}

export default function AsyncHome() {
  return Home([
    {
      id: 'about',
      icon: <img
        src="favicon.svg"
        alt="About me"
        width={132}
        height={140}
        className='mock-mac-os-icon'
      />,
      header: 'About me',
      technologies: [],
      content: __readMd('about.md'),
      date: undefined,
    },
    {
      id: 'saber',
      icon: <img
        src="https://raw.githubusercontent.com/saber-notes/saber/main/assets/icon/icon_macos.png"
        alt="Saber"
        width={80}
        height={80}
      />,
      header: 'Saber',
      technologies: [Technology.flutter],
      content: __readMd('saber.md'),
      date: 'July 2022',
      images: [
        <img
          key='saber-landing'
          src="projects/saber-landing.png"
          aria-hidden='true' alt=''
          width={1920} height={1080} />,
        <img
          key='home'
          src="https://raw.githubusercontent.com/saber-notes/saber/main/metadata/en-US/images/phoneScreenshots/home.png"
          aria-hidden='true' alt=''
          width={1440} height={3120} />,
        <img
          key='editor'
          src="https://raw.githubusercontent.com/saber-notes/saber/main/metadata/en-US/images/phoneScreenshots/editor.png"
          aria-hidden='true' alt=''
          width={1440} height={3120} />,
        <img
          key='settings'
          src="https://raw.githubusercontent.com/saber-notes/saber/main/metadata/en-US/images/phoneScreenshots/settings.png"
          aria-hidden='true' alt=''
          width={1440} height={3120} />,
        <img
          key='login'
          src="https://raw.githubusercontent.com/saber-notes/saber/main/metadata/en-US/images/phoneScreenshots/login.png"
          aria-hidden='true' alt=''
          width={1440} height={3120} />,
      ],
    },
    {
      id: 'ricochlime',
      icon: <img
        src="https://raw.githubusercontent.com/adil192/ricochlime/main/assets/icon/icon_macos.png"
        alt="Ricochlime"
        width={80}
        height={80}
      />,
      header: 'Ricochlime',
      technologies: [Technology.flutter],
      content: __readMd('ricochlime.md'),
      date: 'August 2023'
    },
    {
      id: 'timing',
      icon: <img
        src="projects/timing.svg"
        alt="Timing Flutter"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'Timing Trainer',
      technologies: [Technology.flutter, Technology.pwa],
      content: __readMd('timing.md'),
      date: 'June 2022'
    },
    {
      id: 'BlackboardTheme',
      icon: <img
        src="projects/BlackboardTheme.webp"
        alt="Blackboard Theme"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'Blackboard Theme',
      technologies: [Technology.scss, Technology.js],
      content: __readMd('BlackboardTheme.md'),
      date: 'May 2022',
      images: [
        <img
          key='blackboard_images'
          src="https://raw.githubusercontent.com/adil192/BlackboardTheme/main/screenshots/blackboard_images.webp"
          aria-hidden='true' alt=''
          width={1920} height={1080} />,
        <img
          key='course_after'
          src="https://raw.githubusercontent.com/adil192/BlackboardTheme/main/screenshots/course_after.png"
          aria-hidden='true' alt=''
          width={1920} height={1080} />,
        <img
          key='quiz_after'
          src="https://raw.githubusercontent.com/adil192/BlackboardTheme/main/screenshots/quiz_after.png"
          aria-hidden='true' alt=''
          width={1920} height={1080} />,
        <img
          key='attendance_after'
          src="https://raw.githubusercontent.com/adil192/BlackboardTheme/main/screenshots/attendance_after.png"
          aria-hidden='true' alt=''
          width={1920} height={1080} />,
        <img
          key='login_after'
          src="https://raw.githubusercontent.com/adil192/BlackboardTheme/main/screenshots/login_after.png"
          aria-hidden='true' alt=''
          width={1920} height={1080} />,
        <img
          key='duo_after'
          src="https://raw.githubusercontent.com/adil192/BlackboardTheme/main/screenshots/duo_after.png"
          aria-hidden='true' alt=''
          width={1920} height={1080} />,
        <img
          key='video_after'
          src="https://raw.githubusercontent.com/adil192/BlackboardTheme/main/screenshots/video_after.jpg"
          aria-hidden='true' alt=''
          width={1920} height={1080} />,
        <img
          key='iam_after'
          src="https://raw.githubusercontent.com/adil192/BlackboardTheme/main/screenshots/iam_after.png"
          aria-hidden='true' alt=''
          width={1920} height={1080} />,
      ],
    },
    {
      id: 'nonogram',
      icon: <img
        src="projects/nonogram.webp"
        alt="Nonogram"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'Nonogram',
      technologies: [Technology.pwa],
      content: __readMd('nonogram.md'),
      date: 'May 2022',
    },
    {
      id: 'social',
      icon: <img
        // TODO(adil192): Make a better icon
        src="projects/blank.svg"
        alt="Social"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'Social',
      technologies: [Technology.pwa],
      content: __readMd('social.md'),
      date: 'April 2022',
    },
    {
      id: 'quintle',
      icon: <img
        src="projects/quintle.png"
        alt="Quintle"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'Quintle',
      technologies: [Technology.pwa],
      content: __readMd('quintle.md'),
      date: 'February 2022',
    },
    {
      id: 's-pen',
      icon: <img
        src="projects/spencover.webp"
        alt="S Pen"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'S Pen',
      technologies: [],
      content: __readMd('s-pen.md'),
      date: 'February 2022',
    },
    {
      id: 'fabrik',
      icon: <img
        src="projects/fabrik.webp"
        alt="Fabrik"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'Fabrik',
      technologies: [],
      content: __readMd('fabrik.md'),
      date: 'January 2022',
    },
    {
      id: 'clocks',
      icon: <img
        src="projects/clocks.webp"
        alt="Clocks"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'Clocks',
      technologies: [],
      content: __readMd('clocks.md'),
      date: 'November 2021',
    },
    {
      id: 'zombies',
      icon: <img
        src="projects/zombies.webp"
        alt="Zombies"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'Zombies',
      technologies: [],
      content: __readMd('zombies.md'),
      date: 'November 2021',
    },
    {
      id: 'calculator',
      icon: <img
        src="projects/calculator.webp"
        alt="Calculator"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'Calculator',
      technologies: [],
      content: __readMd('calculator.md'),
      date: 'November 2021',
    },
    {
      id: 'loffice-365',
      icon: <img
        src="projects/loffice-365.webp"
        alt="loffice-365"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'loffice-365',
      technologies: [],
      content: __readMd('loffice-365.md'),
      date: 'October 2021',
    },
    {
      id: 'SamsungAppsPatcher',
      icon: <img
        src="projects/SamsungAppsPatcher.webp"
        alt="Samsung Apps Patcher"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'Samsung Apps Patcher',
      technologies: [],
      content: __readMd('SamsungAppsPatcher.md'),
      date: 'June 2021',
    },
    {
      id: 'S20Debloat',
      icon: <img
        src="projects/S20Debloat.webp"
        alt="S20 Debloat"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'S20 Debloat',
      technologies: [],
      content: __readMd('S20Debloat.md'),
      date: 'May 2021',
    },
    {
      id: 'collatz',
      icon: <img
        src="projects/collatz.webp"
        alt="Collatz"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'Collatz',
      technologies: [],
      content: __readMd('collatz.md'),
      date: 'June 2020',
    },
    {
      id: 'colours',
      icon: <img
        src="projects/colours.webp"
        alt="Colours"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'Colours',
      technologies: [],
      content: __readMd('colours.md'),
      date: 'before June 2020',
    },
    {
      id: 'repo',
      icon: <img
        src="projects/repo.webp"
        alt="Repo"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'Repo',
      technologies: [],
      content: __readMd('repo.md'),
      date: 'before June 2020',
    },
    {
      id: 'LIFE',
      icon: <img
        src="projects/LIFE.webp"
        alt="LIFE"
        width={80}
        height={80}
        className='mock-mac-os-icon'
      />,
      header: 'LIFE',
      technologies: [],
      content: __readMd('LIFE.md'),
      date: 'before June 2020',
    },
  ])
}

function Home(sections: MdSection[]) {
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
      <nav>
        {sections
          .filter(({ id }) => id !== 'about')
          .map(({ id, icon }) => (
            <li key={id}>
              <a href={`#${id}`}>
                {icon}
              </a>
            </li>
          ))}
      </nav>
      <main>
        {sections.map((section) => (
          <Section key={section.id} {...section} />
        ))}
      </main>
    </>
  )
}
