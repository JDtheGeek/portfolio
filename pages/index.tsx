import Head from 'next/head'
import { motion } from 'framer-motion'
import { request } from '../lib/datocms'
import styles from '../styles/Home.module.scss'
import { HOMEPAGE_QUERY, SHOWCASE_QUERY } from '../graphql'
import Showcase from '../components/Showcase'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (context) => {

  const pageData = await request({
    query: HOMEPAGE_QUERY,
    preview: context.preview
  });

  const showcaseData = await request({
    query: SHOWCASE_QUERY,
    preview: context.preview
  })

  return {
    props: { pageData, showcaseData }
  };
}

export const Home = ({ pageData, showcaseData }): JSX.Element  => {
  return (
    <motion.div exit={{ opacity: 0 }} className={styles.container}>
      <Head>
        <title>John Dennehy - Portfolio!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.hero}>
        <h2>Hello world</h2>
      </div>
      <Showcase data={showcaseData} />

    </motion.div>
  )
}

export default Home
