import styles from '../styles/SolarSystem.module.css'
import Link from "next/link";

export default function SolarSystem() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Solar System</h1>
        <div>
          <a href="https://en.wikipedia.org/wiki/Sun" target="_blank">
            <div className={styles.sun}>
              <div className={styles.tooltip}>Sun</div>   
            </div>
          </a>
          <a href="https://en.wikipedia.org/wiki/Mercury_(planet)" target="_blank">
            <div className={styles.mercury}>
              <div className={styles.tooltip}>Mercury</div>  
            </div>
          </a>
          <a href="https://en.wikipedia.org/wiki/Venus" target="_blank">
            <div className={styles.venus}>
              <div className={styles.tooltip}>Venus</div>  
            </div>
          </a>
          <a href="https://en.wikipedia.org/wiki/Earth" target="_blank">
            <div className={styles.earth}>
              <div className={styles.tooltip}>Earth</div>  
            </div>
          </a>
          <a href="https://en.wikipedia.org/wiki/Mars" target="_blank">
            <div className={styles.mars}>
              <div className={styles.tooltip}>Mars</div>  
            </div>
          </a>
          <a href="https://en.wikipedia.org/wiki/Jupiter" target="_blank">
            <div className={styles.jupiter}>
              <div className={styles.tooltip}>Jupiter</div>  
            </div>
          </a>
          <a href="https://en.wikipedia.org/wiki/Saturn" target="_blank">        
            <div className={styles.saturn}>
              <div className={styles.saturnDisc}></div>
              <div className={styles.tooltip}>Saturn</div>  
            </div>          
          </a>
          <a href="https://en.wikipedia.org/wiki/Uranus" target="_blank">
            <div className={styles.uranus}>
              <div className={styles.tooltip}>Uranus</div>
            </div>
          </a>
          <a href="https://en.wikipedia.org/wiki/Neptune" target="_blank">
            <div className={styles.neptune}>
              <div className={styles.tooltip}>Neptune</div>  
            </div>
          </a>
        </div>
      </main>
    </div>
  )
}
