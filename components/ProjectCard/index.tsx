import { Image, ResponsiveImageType, StructuredText, StructuredTextDocument } from 'react-datocms'
import Link from 'next/link'
import Styles from './ProjectCard.module.scss'
import Button from '../Button'

interface ProjectDataProps {
  projectData: {
    id: number
    title: string
    slug: string
    coverImage: {
      responsiveImage: ResponsiveImageType
    }
    summary: StructuredTextDocument
  }
}

const ProjectCard = ({ projectData }: ProjectDataProps): JSX.Element => {
  console.log(projectData)
  const { title, slug, coverImage, summary } = projectData

  return (
    <article className={Styles.card}>

      <Image className={Styles.image}
        data={coverImage.responsiveImage}
      />

      <div className={Styles.content}>
        <header className={Styles.title}>
          <h2>{title}</h2>
        </header>

        <div className={Styles.summary}>
          <StructuredText data={summary} />
        </div>
        <Button>
          <Link href={`/projects/${slug}`}>
            Learn More
        </Link>
        </Button>
      </div>
    </article>
  )
}

export default ProjectCard
