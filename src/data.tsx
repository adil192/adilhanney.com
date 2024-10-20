import { Technology } from './components/technology.tsx';
import { MdSection } from "./components/section";

/**
 * @deprecated
 */
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
I'm a software engineer and have recently graduated from the University of Manchester with a degree in Computer Science with Mathematics.

Currently, I'm working as a Mobile and Web App Developer for Nuwa,
the company behind [the smartest pen in the world](https://nuwapen.com/)!

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
    headerLink: 'https://saber.adil.hanney.org',
    technologies: [Technology.flutter],
    content: `
Saber is the notes app built for handwriting. It was my first non-trivial Flutter project, and I've been working on it since July 2022.

I'd been writing digital notes since 2020, and the only app that suited my needs was [Samsung Notes](https://www.samsung.com/uk/apps/samsung-notes/).
Unfortunately, it was only compatible with Samsung's Android devices and select Windows devices. Additionally, it didn't work on Samsung's Android devices with custom firmware, such as LineageOS, which I was using at the time on my Samsung phone. I wanted to be able to access my notes on all my devices, regardless of the operating system or manufacturer.

I'd been wanting to make my own notes app for a while and in the summer holidays of 2022, I restumbled upon Flutter and finally decided to give it a go. Nowadays, Saber has likely* tens of thousands of users, and it's advancing at a rapid pace. (*I don't directly track users, but some partial data is available from various sources.)

Developing Saber was (and is continuing to be) a huge learning experience for me. I've successfully deployed custom GLSL shaders, continual performance optimisations, CI/CD workflows on GitHub Actions, backwards compatibility for new features, [adaptive and responsive UIs](https://docs.flutter.dev/ui/layout/responsive/adaptive-responsive#the-difference-between-an-adaptive-and-a-responsive-app), [reusable packages](https://pub.dev/packages?q=publisher%3Aadil.hanney.org+show%3Aunlisted), and much more.
I also made the [Saber landing page](https://saber.adil.hanney.org/) ([GitHub](https://github.com/saber-notes/saber-landing)) using Next.js's [Static Site Generation (SSG)](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation).

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
        src="https://raw.githubusercontent.com/saber-notes/saber/main/metadata/en-US/images/phoneScreenshots/1_home.png"
        aria-hidden='true' alt=''
        width={1440} height={3120} />,
      <img
        key='editor'
        src="https://raw.githubusercontent.com/saber-notes/saber/main/metadata/en-US/images/phoneScreenshots/2_editor.png"
        aria-hidden='true' alt=''
        width={1440} height={3120} />,
      <img
        key='login'
        src="https://raw.githubusercontent.com/saber-notes/saber/main/metadata/en-US/images/phoneScreenshots/3_login.png"
        aria-hidden='true' alt=''
        width={1440} height={3120} />,
      <img
        key='settings'
        src="https://raw.githubusercontent.com/saber-notes/saber/main/metadata/en-US/images/phoneScreenshots/4_settings.png"
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
    headerLink: 'https://ricochlime.adil.hanney.org',
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
    date: 'August 2023',
    images: [
      <img
        key='1_home'
        src="https://raw.githubusercontent.com/adil192/ricochlime/refs/heads/main/metadata/en-US/images/newerIphoneScreenshots/1_home.png"
        aria-hidden='true' alt=''
        width={1284} height={2778} />,
      <img
        key='2_play'
        src="https://raw.githubusercontent.com/adil192/ricochlime/refs/heads/main/metadata/en-US/images/newerIphoneScreenshots/2_play.png"
        aria-hidden='true' alt=''
        width={1284} height={2778} />,
      <img
        key='4_shop'
        src="https://raw.githubusercontent.com/adil192/ricochlime/refs/heads/main/metadata/en-US/images/newerIphoneScreenshots/4_shop.png"
        aria-hidden='true' alt=''
        width={1284} height={2778} />,
      <img
        key='5_tutorial'
        src="https://raw.githubusercontent.com/adil192/ricochlime/refs/heads/main/metadata/en-US/images/newerIphoneScreenshots/5_tutorial.png"
        aria-hidden='true' alt=''
        width={1284} height={2778} />,
      <img
        key='6_settings'
        src="https://raw.githubusercontent.com/adil192/ricochlime/refs/heads/main/metadata/en-US/images/newerIphoneScreenshots/6_settings.png"
        aria-hidden='true' alt=''
        width={1284} height={2778} />,
    ],
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
    headerLink: 'https://adil.hanney.org/timing_flutter/',
    technologies: [Technology.flutter, Technology.pwa],
    content: `
Timing Trainer presents you with a blinking square and you guess the time between blinks.
As you play, you'll get better at recognizing sub-second intervals.

I first created this game/trainer
[as a PWA](https://adil.hanney.org/timing/)
(progressive web app).
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
    headerLink: 'https://github.com/adil192/BlackboardTheme',
    technologies: [Technology.scss, Technology.js],
    content: `
My \`BlackboardTheme\` project encompasses a collection of (unofficial) tweaks and improvements to the University of Manchester's websites including Blackboard.
~~It does this with the browser extensions [Stylus](https://addons.mozilla.org/en-GB/firefox/addon/styl-us/) for styles and [Tampermonkey](https://addons.mozilla.org/en-GB/firefox/addon/tampermonkey/) for scripts, which inject my custom CSS and JavaScript into the pages.~~
I've since moved to bundling everything into a single easy-to-install browser extension.

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
        key='blackboard-grid'
        src="https://raw.githubusercontent.com/adil192/BlackboardTheme/main/screenshots/blackboard-grid.png"
        aria-hidden='true' alt=''
        width={1920} height={905} />,
      <img
        key='course_after'
        src="https://raw.githubusercontent.com/adil192/BlackboardTheme/main/screenshots/course.png"
        aria-hidden='true' alt=''
        width={3830} height={1077} />,
      <img
        key='quiz_after'
        src="https://raw.githubusercontent.com/adil192/BlackboardTheme/main/screenshots/quiz.png"
        aria-hidden='true' alt=''
        width={3825} height={1077} />,
      <img
        key='login_after'
        src="https://raw.githubusercontent.com/adil192/BlackboardTheme/main/screenshots/login.png"
        aria-hidden='true' alt=''
        width={3830} height={1077} />,
      <img
        key='duo_after'
        src="https://raw.githubusercontent.com/adil192/BlackboardTheme/main/screenshots/duo.png"
        aria-hidden='true' alt=''
        width={3820} height={1075} />,
      <img
        key='video_after'
        src="https://raw.githubusercontent.com/adil192/BlackboardTheme/main/screenshots/video.png"
        aria-hidden='true' alt=''
        width={3840} height={1080} />,
      <img
        key='iam_after'
        src="https://raw.githubusercontent.com/adil192/BlackboardTheme/main/screenshots/iam.png"
        aria-hidden='true' alt=''
        width={3830} height={1077} />,
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
    headerLink: 'https://adil.hanney.org/nonogram/',
    technologies: [Technology.flutter, Technology.pwa],
    content: `
Nonogram ([wikipedia](https://en.wikipedia.org/wiki/Nonogram)) is a puzzle game where you fill in squares on a grid based on the
row/column clues.

I created this web app after enjoying the
[Android 10 Easter egg](https://www.androidauthority.com/android-10-easter-egg-2-1017821/)
and my success with [Quintle](#quintle).
You can find it at [adil.hanney.org/nonogram](https://adil.hanney.org/nonogram/).

I later made [Super Nonogram](https://github.com/adil192/super_nonogram)
([available online](https://supernonogram.adil.hanney.org/))
which is a rewrite of this app in Flutter with some new features.

One of the game modes in Super Nonogram is procedurally generated puzzles
that get harder as you progress.

The other game mode is where you can input any keyword and it will generate a puzzle based on that. It does this by interacting with the
[Pixabay API](https://pixabay.com/api/docs/) to get images based on the keyword and then converting them to puzzles.
`,
    date: 'May 2022',
    images: [
      <img
        key='nonogram'
        src="https://user-images.githubusercontent.com/21128619/187011066-c679d84e-aceb-47ef-b4b9-fe50e7feb78a.gif"
        aria-hidden='true' alt=''
        width={1639} height={800} />,
      <img
        key='super_nonogram_heart'
        src="https://raw.githubusercontent.com/adil192/super_nonogram/refs/heads/main/metadata/en-US/images/phoneScreenshots/3-heart.png"
        aria-hidden='true' alt=''
        width={1440} height={3120} />,
      <img
        key='super_nonogram_level_1'
        src="https://raw.githubusercontent.com/adil192/super_nonogram/refs/heads/main/metadata/en-US/images/phoneScreenshots/4-level-1.png"
        aria-hidden='true' alt=''
        width={1440} height={3120} />,
    ],
  },
  {
    id: 'social',
    icon: <img
      src="projects/social.webp"
      alt="Social"
      width={80}
      height={80}
      className='mock-mac-os-icon'
    />,
    header: 'Social Media Demo',
    technologies: [Technology.pwa],
    content: `
This was a working (though inefficient) social media demo I made after I was frustrated by not being able to access my chats across all my devices.

I wanted to make a proof of concept that it was possible to make a social media app completely in the browser, but that acted like a native app when installed as a PWA.

It had a Snapchat-like layout where you could swipe between the camera, chats, and feed. I only implemented the chat functionality and used it to chat with my friends for a while. I tested it with lots of cat pictures as you can see in the screenshots!
`,
    date: 'April 2022',
    images: [
      <img
        key='social-1'
        src="projects/social-1.png"
        aria-hidden='true' alt=''
        width={2400} height={1080} />,
      <img
        key='social-2'
        src="projects/social-2.jpg"
        aria-hidden='true' alt=''
        width={2400} height={1080} />,
      <img
        key='social-3'
        src="projects/social-3.jpg"
        aria-hidden='true' alt=''
        width={2400} height={1080} />,
      <img
        key='social-4'
        src="projects/social-4.jpg"
        aria-hidden='true' alt=''
        width={2400} height={1080} />,
    ],
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
    headerLink: 'https://adil.hanney.org/quintle/',
    technologies: [Technology.pwa],
    content: `
Quintle is my reimplementation of the viral game Wordle
from before it was acquired by the New York Times.

The design was inspired by
[neumorphism](https://en.wikipedia.org/wiki/Neumorphism),
and it's playable offline as a PWA (progressive web app).

The word of the day used to match the official Wordle word,
but they've since moved to an API approach where the word is fetched from the server,
so I've stuck with the last publicly available word list.

On top of the core functionality, I added a few features:
- The ability to replay previous days' words
- A mode for e-paper devices that uses greyscale colours and improved contrast

Quintle is available to play
[online](https://adil.hanney.org/quintle/)
or through the
[Google Play Store](https://play.google.com/store/apps/details?id=org.hanney.adil.quintle).
`,
    date: 'February 2022',
    images: [
      <img
        key='quintle.webp'
        src="https://adil.hanney.org/quintle/screenshots/quintle.webp"
        aria-hidden='true' alt=''
        width={1080} height={2240} />,
      <img
        key='quintle-results.webp'
        src="https://adil.hanney.org/quintle/screenshots/quintle-results.webp"
        aria-hidden='true' alt=''
        width={1080} height={2240} />,
      <img
        key='quintle-tutorial.webp'
        src="https://adil.hanney.org/quintle/screenshots/quintle-tutorial.webp"
        aria-hidden='true' alt=''
        width={1080} height={2240} />,
    ],
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
    headerLink: 'https://adil.hanney.org/fabrik/',
    technologies: [],
    content: `
A demo of the Forward And Backward Reaching
[Inverse Kinematics](https://en.wikipedia.org/wiki/Inverse_kinematics)
(FABRIK) algorithm.

In short, it's a way to calculate the joint positions of a chain of bones
to reach a given point in space (like your mouse cursor).

I made this to experiment with the algorithm before using it
for procedural animation in my A-Level Computer Science project
(a multiplayer shooter game).

In the demo,
you can customize the number of bones, their length,
and whether they're constrained by gravity.
You can [try it out online](https://adil.hanney.org/fabrik/).
`,
    date: 'January 2022',
    images: [
      <img
        key='fabrik.gif'
        src="projects/fabrik.gif"
        aria-hidden='true' alt=''
        width={360} height={408} />,
    ],
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
    headerLink: 'https://adil.hanney.org/clocks/',
    technologies: [],
    content: `
A page that contains every analogue clock face.

Every minute, the page will pan over to the next clock face for the current time.

You can [try it out online](https://adil.hanney.org/clocks/).
`,
    date: 'November 2021',
    images: [
      <img
        key='clocks-screenshot'
        src="projects/clocks-screenshot.webp"
        aria-hidden='true' alt=''
        width={1920} height={1080} />,
    ],
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
    headerLink: 'https://github.com/adil192/top-down-zombie-shooter',
    technologies: [],
    content: `
A top-down zombie shooter game I made for a Python coursework in university,
featuring auto-save, a leaderboard,
a "boss key" to quickly replace the screen with an Excel spreadsheet,
and cheat codes.

You'll need Python installed to [play](https://github.com/adil192/top-down-zombie-shooter).
`,
    date: 'November 2021',
    images: [
      <img
        key='zombies-screenshot'
        src="https://user-images.githubusercontent.com/21128619/182282485-17a533cf-4a16-407c-b87d-5025e9a89f46.png"
        aria-hidden='true' alt=''
        width={1602} height={939} />,
    ],
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
    headerLink: 'https://github.com/adil192/loffice-365',
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
    headerLink: 'https://github.com/adil192/SamsungAppsPatcher',
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
