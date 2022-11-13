import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <div className={styles.header}>
          <Image className={styles.logo} src={'/svgs/anforcom.svg'} alt='Anforcom 2023' width={64} height={64} />
          <h1 className={styles.title}>Anforcom 2023</h1>
          <p className={styles.description}>
            Anforcom (Annual Informatics Competition) adalah serangkaian acara dan perlombaan yang diadakan Mahasiswa
            Informatika Universitas Diponegoro. Event ini dilaksanakan dalam rangka mengenalkan Kultur Teknologi kepada
            masyarakat dan menumbuhkan jiwa jiwa kompetitif yang sportif di kalangan pelajar.
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.gridContainer}>
          <div className={styles.gridOne}>
            <div className={styles.gridContent}>
              <div className={styles.stack}>
                <h2 className={styles.gridTitle}>Tentang Anforcom</h2>
                <p className={styles.gridDescription}>
                  Ketahui lebih lanjut tentang salah satu kompetisi computer science bergengsi di Indonesia
                </p>
              </div>
            </div>
          </div>

          <div className={styles.gridTwo}>
            <div className={styles.gridContent}>
              <div className={styles.stack}>
                <p className={styles.gridDescription}>Masuk ke Anforcom</p>
                <h2 className={styles.gridTitle}>Dashboard</h2>
              </div>
            </div>
          </div>

          <div className={styles.gridThree}>
            <div className={styles.gridContent}>
              <div className={styles.stack}>
                <h2 className={styles.gridTitle}>Diponegoro UI/UX Competition</h2>
                <p className={styles.gridDescription}>Revolt, Be Creative, Be Different!</p>
              </div>
            </div>
          </div>

          <div className={styles.gridFour}>
            <div className={styles.gridContent}>
              <div className={styles.stack}>
                <h2 className={styles.gridTitle}>Diponegoro Logic Competition</h2>
                <p className={styles.gridDescription}>Breaking the logic gate</p>
              </div>
            </div>
          </div>

          <div className={styles.gridFive}>
            <div className={styles.gridContent}>
              <div className={styles.stack}>
                <h1>Awake</h1>
                <p>How to Find Your Passion on Information Technology World</p>
              </div>
              <h2 className={styles.gridTitle}>Seminar</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
