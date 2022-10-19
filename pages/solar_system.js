import styles from '../styles/SolarSystem.module.css'

export default function SolarSystem() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Solar System</h1>
        <div>
          <div className={styles.sun}>
            <div className={styles.tooltip}>Sun</div>   
          </div>
          <div className={styles.mercury}>
            <div className={styles.tooltip}>Mercury</div>  
          </div>
          <div className={styles.venus}>
            <div className={styles.tooltip}>Venus</div>  
          </div>
          <div className={styles.earth}>
            <div className={styles.tooltip}>Earth</div>  
          </div>
          <div className={styles.mars}>
            <div className={styles.tooltip}>Mars</div>  
          </div>
          <div className={styles.jupiter}>
            <div className={styles.tooltip}>Jupiter</div>  
          </div>
          <div className={styles.saturn}>
            <div className={styles.saturnDisc}></div>
            <div className={styles.tooltip}>Saturn</div>  
          </div>          
          <div className={styles.uranus}>
            <div className={styles.tooltip}>Uranus</div>
          </div>
          <div className={styles.neptune}>
            <div className={styles.tooltip}>Neptune</div>  
          </div>
        </div>
      </main>
    </div>
  )
}
