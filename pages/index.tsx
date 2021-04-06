import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div exit={{ opacity: 0 }} className="container">
      <Head>
        <title>John Dennehy - Portfolio!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hi, I'm JD!</h1>
      <Link href="/projects">
        <a>See projects</a>
      </Link>
    </motion.div>
  )
}
