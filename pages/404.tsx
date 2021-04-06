import { motion } from 'framer-motion'
import Head from 'next/head'

export default function Missing() {
  return (
    <motion.div exit={{ opacity: 0 }} className="container">
      <Head>
        <title>John Dennehy - Oops</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Oops. That page doesn't appear to exist.</h1>
    </motion.div>
  )
}