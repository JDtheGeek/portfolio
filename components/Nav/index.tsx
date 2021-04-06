import Link from '../Link'
import NextLink from 'next/link'
import navStyles from './Nav.module.scss'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <NextLink href='/' >
        <a className={navStyles.logo}><h1>JDtheGeek</h1></a>
      </NextLink>
      <Link href='/'>
        <a >Home</a>
      </Link>
      <Link href='/projects'>
        <a >Project</a>
      </Link>
      <Link href='/about'>
        <a className="link">About</a>
      </Link>
    </nav>
  )
}

export default Nav
