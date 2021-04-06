import { motion } from 'framer-motion'
import Head from 'next/head'

export default function About() {
  return (
    <motion.div exit={{ opacity: 0 }} className="container">
      <Head>
        <title>John Dennehy - About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About Page</h1>
    </motion.div>
  )
}