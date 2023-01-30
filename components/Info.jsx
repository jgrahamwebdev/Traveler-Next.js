import React from 'react'
import styles from '../styles/Info.module.css';

function Info() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h1 className={styles.title}>Travel Every Season Of The Year</h1>
            <p className={styles.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa totam deserunt ipsam ducimus impedit quasi optio repellendus quisquam autem est, voluptate, reiciendis eveniet aspernatur officia, accusantium asperiores nulla! Rerum error nobis, debitis culpa ullam rem ab sapiente doloremque?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla magni ipsam quia architecto, dicta id fugit temporibus, dolores, dolor laudantium fuga. Iusto illum officiis quis veniam ducimus quia accusantium, possimus eos soluta. Odio, quo numquam animi corrupti quisquam!
            </p>
        </div>
        <div className={styles.right}>
            <video className={styles.video} src="/img/snow.mp4" autoPlay loop muted></video>
        </div>
    </div>
  )
}

export default Info