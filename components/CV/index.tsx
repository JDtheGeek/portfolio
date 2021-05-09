
import React from 'react'
import Styles from './CV.module.scss'
import ContactDetails from './ContactDetails';
import { ResponsiveImageType } from 'react-datocms';
import Skills from './Skills';
import { motion } from 'framer-motion';


interface CVProps {
  name: string
  contactDetails: Array<{
    id: string,
    label: string,
    method: string,
    href: string,
    icon: {
      responsiveImage: ResponsiveImageType
    }
  }>,
  skills?: Array<string>,
  experience?: {
    companyName: string,
    companyURL: string,
    jobTitle: string,
    startDate: Date,
    endDate: Date | null,
    summary: string,
  }[],
}

const CV = ({ name, contactDetails, skills, experience }: CVProps): JSX.Element => {

  console.log("CV: ", contactDetails)

  return (
    <motion.div
      className={Styles['cv-container']}
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{duration:0.8}}
    >
      <header className={Styles.header}>
        <ContactDetails data={contactDetails} />
        <div className={Styles.title}>
          <h1>{name}</h1>
          <p>Summary here</p>
        </div>
      </header>

      <div className={Styles.body}>
        <section className={Styles["skills-section"]}>
          <h2 className="section-title"> Technical Skills </h2>
          <Skills data={skills} />
        </section>

        <section id="experience">
          <h2 className="section-title">Experience</h2>
        </section>

        <section id="education">
          <h2>Education</h2>
        </section>
      </div>

      <footer className={Styles.footer}>
 
      </footer>

    </motion.div>
  )
}

export default CV



