import styles from './Layout.module.scss'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <Header/>
        <main className={styles.main}>
          {children}
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout