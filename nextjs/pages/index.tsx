import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CloudJob</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container">
          <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
              <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link active" aria-current="page">Positions</a>
                  </Link>
                </li>
              <li className="nav-item"><a href="/admin" className="nav-link">Admin</a></li>
            </ul>
          </header>
        </div>
      </main>
    </div>
  )
}

export default Home
