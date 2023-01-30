import React from 'react'
import { vacations } from '../data';
import styles from '../styles/Vacations.module.css';

import Vacations from './Vacations';

function Vacation() {
  return (
    <>
        <div className={styles.headerBox}>
        <h1 className={styles.mainTitle}>Explore the United States!</h1>
        <h3 className={styles.description}>These popular destinations have a lot to offer</h3>
        </div>

        <div className={styles.container}>
            {vacations.map((item) => {
                return <Vacations key={item.id} img={item.img} title={item.title}/>
            })}
        </div>
    </>
  )
}

export default Vacation