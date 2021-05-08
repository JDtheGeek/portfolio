
export const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allProjects(first: $limit, filter: { showcase: {eq: true}}, orderBy: position_ASC) {
    id
    title
    slug
  }
}`;

export const SHOWCASE_QUERY = `query Showcase($limit: IntType) {
  allProjects(first: $limit, filter: {showcase: {eq: true}}, orderBy: position_ASC) {
    id
    title
    slug
    summary {
      value
    }
    liveUrl
    githubUrl
    coverImage {
      responsiveImage(imgixParams: {fit: crop, w: 500, h: 500, auto: format}) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
  }
}`;

export const PROJECTS_QUERY = `query Projects  {
  allProjects(orderBy: position_ASC) {
    id
    title
    slug
    summary {
      value
    }
    liveUrl
    githubUrl
    coverImage {
      responsiveImage(imgixParams: { fit: crop, w: 500, h: 500, auto: format }) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
  }
}`;

export const SLUGS_QUERY = `query Slugs {
  allProjects {
    slug
  }
}`;

export const PROJECT_QUERY = `query Project($slug: String) {
  project(filter: {slug: {eq: $slug}}) {
    description {
      value
    }
    id
    title
    slug
    liveUrl
    githubUrl
    coverImage {
      responsiveImage(imgixParams: {auto: enhance}) {
        src
      }
    }
  }
}`

export const CONTACT_METHODS_QUERY = `query Project($slug: String) {
  project(filter: {slug: {eq: $slug}}) {
    description {
      value
    }
    id
    title
    slug
    liveUrl
    githubUrl
    coverImage {
      responsiveImage(imgixParams: {auto: enhance}) {
        src
      }
    }
  }
}`

export const CV_QUERY = `query CV_QUERY {
  cv {
    contactDetails {
      label
      method
      id
      href
      icon {
        id
        height
        width
        mimeType
        url(imgixParams: {ar: "1:1"})
      }
    }
    skills {
      id
      name
      icon {
        url(imgixParams: {ar: "1:1"})
      }
      showcase
    }
  }
}`

