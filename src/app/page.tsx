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
        
      </main>
    </>
  )
}
