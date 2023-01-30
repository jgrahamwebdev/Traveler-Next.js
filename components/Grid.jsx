import React from 'react'
import styles from '../styles/Grid.module.css';

function Grid() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Discover Europe</h1>
        <h3 className={styles.description}>Get inspiration for your next trip</h3>
        <div className={styles.gridContainer}>
           <div className={styles.gridBoxOne}>
             <img className={styles.img} src="/img/eu-1.jpg" alt="" />
           </div>
           <div className={styles.gridBoxTwo}>
             <img className={styles.img} src="/img/eu-2.jpg" alt="" />
           </div>
           <div className={styles.gridBoxThree}>
             <img className={styles.img} src="/img/eu-3.jpg" alt="" />
           </div>
           <div className={styles.gridBoxFour}>
             <img className={styles.img} src="/img/eu-4.jpg" alt="" />
           </div>
           <div className={styles.gridBoxFive}>
             <img className={styles.img} src="/img/eu-5.jpg" alt="" />
           </div>
           <div className={styles.gridBoxSix}>
             <img className={styles.img} src="/img/eu-6.jpg" alt="" />
           </div>
           <div className={styles.gridBoxSeven}>
             <img className={styles.img} src="/img/eu-7.jpg" alt="" />
           </div>
           <div className={styles.gridBoxEight}>
             <img className={styles.img} src="/img/eu-8.jpg" alt="" />
           </div>
           <div className={styles.gridBoxNine}>
             <img className={styles.img} src="/img/eu-9.jpg" alt="" />
           </div>
        </div>
    </div>
  )
}

export default Grid