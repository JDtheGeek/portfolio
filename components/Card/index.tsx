import styles from './Card.module.scss'
import React from 'react'

export const Card = ({children}) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  )
}

export default Card