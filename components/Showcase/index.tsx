import Link from 'next/link';
import React from 'react'
import Button from '../Button';
import ProjectCard from '../ProjectCard/index';
import Styles from './Showcase.module.scss'

const Showcase = ({ data }): JSX.Element => {

  const { allProjects } = data

  return (
    <section className={Styles.showcase}>
      <h2>Showcase</h2>
      <div className={Styles.projects}>
        {allProjects.map(
          project => (
            <ProjectCard key={project.id} projectData={project} />
          )
        )}
      </div>
      <Button>
        <Link href="/projects">
          <a>See all projects</a>
        </Link>

      </Button>
    </section>
  )
}

export default Showcase
