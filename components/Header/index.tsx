import styles from './Header.module.scss'
import React from 'react'

export const Header = ({ title, description }) => {
  return (
    <div >
      <h1 className={styles.title}>{ title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default Header