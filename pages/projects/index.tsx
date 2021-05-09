import { motion } from "framer-motion"
import { PROJECTS_QUERY } from "../../graphql";
import { request } from "../../lib/datocms";
import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { ResponsiveImageType, StructuredTextDocument } from "react-datocms";
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async(context: { preview: boolean; }) => {

  const projectsData = await request({
    query: PROJECTS_QUERY,
    preview: context.preview
  });

  return {
    props: { projectsData }
  };
}

interface ProjectsProps {
  projectsData: {
    allProjects: Array<
      {
        id: number;
        title: string;
        slug: string;
        coverImage: { responsiveImage: ResponsiveImageType; };
        summary: StructuredTextDocument;
      }
    >
  }
}

const Projects = ({ projectsData }: ProjectsProps): JSX.Element => {

  console.log(projectsData)
  const { allProjects } = projectsData

  return (
    <motion.div exit={{ opacity: 0 }} className='container'>
      {allProjects.map(
        (project) => (
          <div key={project.id}>
            <ProjectCard projectData={project} />
          </div>
        )
      )}
    </motion.div>
  )
}

export default Projects
