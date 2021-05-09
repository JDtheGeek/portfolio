import Link from '../Link'
import Styles from './Nav.module.scss'


const Nav = (): JSX.Element => {
  return (
    <nav className={Styles.nav}>
      <Link className={Styles.link} href='/'>
        <a >Home</a>
      </Link>
      <Link className={Styles.link} href='/cv'>
        <a >CV</a>
      </Link>
      <Link className={Styles.link} href='/projects'>
        <a >Projects</a>
      </Link>
      <Link className={Styles.link} href='/about'>
        <a className="link">About</a>
      </Link>
    </nav>
  )
}

export default Nav
