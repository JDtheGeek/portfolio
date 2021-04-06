import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import linkStyles from './Link.module.scss'

export const CustomLink = ({ href, children, ...props }) => {
  const currentPath = useRouter().asPath
  const singleChild = React.Children.only(children)

  const childClassName = currentPath === href
    ? `${linkStyles.selected}`
    : `${linkStyles.link}`

  return (
    <Link href={href} {...props}>
      {React.cloneElement(singleChild, {
        className: childClassName || null,
      })}
    </Link>
  )
}

export default CustomLink