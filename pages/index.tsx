import Head from 'next/head'
import Link from 'next/link'
import { request } from '../lib/datocms'

import { motion } from 'framer-motion'
import styles from '../styles/Home.module.scss'

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allProjects(first: $limit, filter: { showcase: {eq: true}}, orderBy: position_ASC) {
    id
    title
    slug
  }
}`;

export async function getStaticProps(context) {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
    preview: context.preview
  });
  return {
    props: { data }
  };
}

export default function Home({data}) {
  return (
    <motion.div exit={{ opacity: 0 }} className="container">
      <Head>
        <title>John Dennehy - Portfolio!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <h1>
          John <span className="dennehy">Dennehy</span>
        </h1>
      </main>
      <div className="projects">
        {JSON.stringify(data, null, 2)}
      <Link href="/projects">
        <a>See all projects</a>
      </Link>
      </div>
    </motion.div>
  )
}
