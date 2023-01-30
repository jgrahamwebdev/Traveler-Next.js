import React from 'react'

import styles from '../styles/Subscribe.module.css';

function Subscribe() {
  return (
    <div className={styles.container}>
        <video className={styles.video} src="/img/ocean.mp4" autoPlay loop muted></video>

        <div className={styles.subscribeBox}>
            <h2 className={styles.title}>Subscribe To Our Newsletter</h2>
            <p className={styles.subtitle}>Get secret deals and lowered prices every month!</p>
            <input className={styles.input} type="text" placeholder='Name'/>
            <input className={styles.input} type="text" placeholder='Email'/>
            <button className={styles.btn}>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe