import React from 'react'
import styles from '../styles/Vacations.module.css';

function Vacations(props) {
  return (
    <div>
      <div className={styles.vacationsBox}>
        <img className={styles.photo} src={props.img} alt="" />
        <h3 className={styles.title}>{props.title}</h3>
      </div>
    </div>
  )
}

export default Vacations