import React from 'react';

import { Technology } from './components/technology.tsx';
import { MdSection } from "./components/section";

function __readMd(mdFile: string): string {
  return mdFile;
}

export const sections: MdSection[] = [
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
    content: `
I'm a software engineer and undergrad at the University of Manchester.

Currently, I'm mostly working on a host of architectural improvements to [Saber](#saber).

Find me on
[GitHub](https://github.com/adil192)
or
[LinkedIn](https://www.linkedin.com/in/adil-hanney/).
`,
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
    content: `
Saber is the notes app built for handwriting. It was my first non-trivial Flutter project, and I've been working on it since July 2022.

I'd been writing digital notes since 2020, and the only app that suited my needs was [Samsung Notes](https://www.samsung.com/uk/apps/samsung-notes/).
Unfortunately, it was only compatible with Samsung's Android devices and select Windows devices. Additionally, it didn't work on Samsung's Android devices with custom firmware, such as LineageOS, which I was using at the time on my Samsung phone. I wanted to be able to access my notes on all my devices, regardless of the operating system or manufacturer.

I'd been wanting to make my own notes app for a while and in the summer holidays of 2022, I restumbled upon Flutter and finally decided to give it a go. Nowadays, Saber has likely* tens of thousands of users, and it's advancing at a rapid pace. (*I don't directly track users, but some partial data is available from various sources.)

Developing Saber was (and is continuing to be) a huge learning experience for me. I've successfully deployed custom GLSL shaders, continual performance optimisations, CI/CD workflows on GitHub Actions, backwards compatibility for new features, [adaptive and responsive UIs](https://docs.flutter.dev/ui/layout/responsive/adaptive-responsive#the-difference-between-an-adaptive-and-a-responsive-app), [reusable packages](https://pub.dev/packages?q=publisher%3Aadil.hanney.org+show%3Aunlisted), and much more.

Saber is available on all major platforms; find out more at [saber.adil.hanney.org](https://saber.adil.hanney.org) or on [GitHub](https://github.com/saber-notes/saber).
`,
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
    content: `
Ricochlime is a satisfying ~~slime~~ monster shooter game.
The name was originally a portmanteau of "ricochet" and "slime",
but I've since had to switch out the graphics for licensing reasons
so there aren't any slimes anymore! I developed Ricochlime to experiment
with making a game in Flutter using the Flame game engine.

I designed this to be a simple, easy, satisfying game to play.
I often like to have something to do with my hands while I'm focusing on something else,
and I find that games like this are perfect for that.
The music is disabled by default, and
the only ads in the app are a banner at the bottom of the screen,
which I find is a good compromise between monetisation and user experience.

Ricochlime is available on all major platforms and
[online](https://ricochlime.adil.hanney.org).
View more on [GitHub](https://github.com/adil192/ricochlime).
`,
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
    content: `
Timing Trainer presents you with a blinking square and you guess the time between blinks.
As you play, you'll get better at recognizing sub-second intervals.

I first created this game/trainer as a PWA (progressive web app)
[here](https://adil.hanney.org/timing/).
Later, since it was a very simple app,
I made a cross-platform version as my first foray into Flutter.

The Flutter version is available on all major platforms and
[online](https://adil.hanney.org/timing_flutter/).
View more on [GitHub](https://github.com/adil192/timing_flutter).
`,
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
    content: `
My \`BlackboardTheme\` project encompasses a collection of (unofficial) tweaks and improvements to the University of Manchester's websites including Blackboard. It does this with the browser extensions [Stylus](https://addons.mozilla.org/en-GB/firefox/addon/styl-us/) for styles and [Tampermonkey](https://addons.mozilla.org/en-GB/firefox/addon/tampermonkey/) for scripts, which inject my custom CSS and JavaScript into the pages.

This project was originally only intended to apply Google's Material Design to my university's Blackboard website,
but as it grew, I began to theme more of my university's websites and then started adding small scripts to add features or boost usability.
Every time I encountered an issue, or saw something that I found difficult to use, I would try to fix it.

One of the most improved areas is the video player. The course content videos were difficult to use as you had to use the mouse to click on the buttons to play/pause, click somewhere on the razor-thin progress bar to rewind, and go through a series of popups and dialogs to configure captions at the start of every video!
I emailed the university about this, but didn't get a response, so I decided to fix it myself.
I added the standard keyboard shortcuts for play/pause, rewind/fast-forward, volume control, captions, and fullscreen.
I also set sensible defaults, including a larger font size, better fonts, and a smaller width so your eyes don't have to move as far to read the captions.
I also changed the upscaling algorithm to favour sharpness over smoothness, as the fuzziness of lower quality videos was harder to read.

Another notable area is the course selection screen. The default layout was a compacted list of courses with very long names, which made it difficult to find the course you wanted.
I added a grid layout with course cards which stay in the same position over time to help you remember where your courses are.
I assigned each of my modules and departments an image which is displayed on the card, and left instructions on how to change the image for your own courses.
I also added a feature that dims courses from semester 1 when you're in semester 2, to help you focus on the courses you're currently studying.

It's hard to describe all the changes I've made, so I recommend you check out the [GitHub repository](https://github.com/adil192/BlackboardTheme) which has a more complete list of features, before and after screenshots, and instructions on how to install it.
`,
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
];
