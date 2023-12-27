import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <a href='#top'>
        <Image
          src="/favicon.svg"
          alt="Adil's profile picture"
          width={500}
          height={500}
          className="pfp"
        />
      </a>
      <header id="top">
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
        <section id="about">
          <h2>About me</h2>
          <p>
            I'm a software engineer and university student at the University of Manchester.
          </p>
          <p>
            Currently, I'm mostly working on my final year project which encompasses a lot of architectural improvements to{' '}
            <a href="#saber">Saber</a>.
          </p>
        </section>

        <section id="saber">
          <div className='section-header'>
            <Image
              src="https://raw.githubusercontent.com/saber-notes/saber/main/assets/icon/icon_macos.png"
              alt="Saber"
              width={1024}
              height={1024}
            />
            <h2>Saber</h2>
          </div>
          <p>
            Saber is a notes app designed for handwriting.
            </p>
          <p>
            It's designed to be as simple as possible, with a focus on the writing experience, while still delivering uniquely useful features.
          </p>
          <p>
            Notably, it can invert your notes (including images) in real time
            using low-level shaders and <code>RenderObject</code>s.
          </p>
        </section>
      </main>
    </>
  )
}
