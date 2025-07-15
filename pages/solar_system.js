import styles from '../styles/SolarSystem.module.css'
import SolarSystemTable from '../components/SolarSystemTable';

export default function SolarSystem() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Solar System</h1>
        <div>
          <div>
            <h2 className={styles.title}>Instructions</h2>
            <ol className={styles.text}>
              <li>Click on the Solar System window.</li>
              <li>Drag and move the cursor within the window.</li>
              <li>Zoom in or out of the image.</li>
              <li>Click on full screen to view it in full screen mode.</li>
              <li>Reload the page if you lose focus</li>
            </ol>
            <iframe
              src="https://www.geogebra.org/material/iframe/id/fcenpwqg/width/1920/height/828/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/true/ctl/false"
              width="100%"
              height="828"
              scrolling='no'
              allowFullScreen                         // ✔️ JSX usa camelCase
              frameBorder="0"                         // ✔️ atributo HTML → camelCase
              loading="lazy"                          // 🚀 carga diferida
              title="Solar System - Geogebra"
              style={{
                border: '1px solid #e4e4e4',
                borderRadius: '4px',
              }}
            />
          </div>
          <div>
            <h2 className={styles.title}>Information</h2>
            <SolarSystemTable />
          </div>
        </div>
      </main>
    </div>
  )
}
