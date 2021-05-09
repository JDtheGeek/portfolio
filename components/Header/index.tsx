import styles from './Header.module.scss'
import Nav from '../Nav'
import Image from 'next/image'
import Link from 'next/link';

export const Header = (): JSX.Element => {

  return (
    <header className={styles.header}>
      <Link href='/' >
        <a className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="Logo for John Dennehy"
            layout="intrinsic"
            width={120}
            height={70}
          />
        </a>
      </Link>
      <Nav />
    </header>
  )
}

export default Header