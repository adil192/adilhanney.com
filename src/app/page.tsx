import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.sidebar}>
        sidebar
      </div>
      <main className={styles.main}>
        main

      </main>
    </>
  )
}
