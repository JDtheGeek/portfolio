import { motion } from 'framer-motion'
import Head from 'next/head'
import Styles from '../styles/CV.module.scss'
import CV from '../components/CV'
import { CV_QUERY } from '../graphql/index';
import { GetStaticProps } from 'next';
import { request } from '../lib/datocms';

export const getStaticProps: GetStaticProps = async () => {

  const pageData = await request({
    query: CV_QUERY,
  });

  return {
    props: { pageData}
  };
}

export default function CVPage({pageData}): JSX.Element {

  const { contactDetails, experience, skills } = pageData.cv

  return (
    <motion.div exit={{ opacity: 0 }} className={Styles.container}>
      
      <Head>
        <title>John Dennehy - CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CV
        key="cv"
        name="John Dennehy"
        contactDetails={contactDetails}
        experience={experience}
        skills={skills}
      />

    </motion.div>
  )
}