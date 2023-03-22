import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section className={utilStyles.headingMd}>
    <p>ogolnie to jestem fanka banana i super ze umie inglisz</p>
    <p>
      (nie wiem co to robi ale buja wiec jest super)
      <a href='https://www.youtube.com/watch?v=FNEY8DXz7jM'>zobaczysz mrrrr</a>.
    </p>
    </section>
    </Layout>
  )
}