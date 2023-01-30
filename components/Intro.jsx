import { useState } from 'react'
import styles from '../styles/Intro.module.css';

import { AiOutlineSearch } from 'react-icons/ai';

function Intro() {

  const [toggle, setToggle] = useState(true);

  const toggler = () => {
    setToggle((prev) => !prev)
  };

  return (
    <div className={styles.container} style={toggle ? { height: '65vh'} : { height: 'calc(100vh - 5rem)'}}>
        <video className={styles.bgVideo} src="/img/travel.mp4" autoPlay loop muted></video>

        <h1 className={styles.titleOne}>See The World</h1>
        <h1 className={styles.titleTwo}>Make Memories That Will Last A Lifetime</h1>

        <img className={styles.logo} src="/img/logo.svg" alt="" />
        <button className={styles.btn} onClick={toggler}>Get Started</button>

        <div className={styles.searchBox} style={toggle ? { display: 'none' } : { display: 'flex' }}>
          <input className={styles.search} type="text" placeholder='Where would you like to go? (ex: Beach, Europe, Florida, etc.)' />
          <div className={styles.searchBtn}><AiOutlineSearch className={styles.icon}/></div>
        </div>
    </div>
  )
}

export default Intro