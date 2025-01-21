import styles from './Titles.module.scss'
import Background from '/images/Main/Title/background.png'

const Titles = () => {
    return (
      <section className={styles.titleContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.title}>
            <p>Good4Me</p>
            <h1>MULTI-VITAMIN<br/>(3 MONTH SUPPLY)</h1>
            <h3>
              Good4Me Apple Cider Vinegar gummies are the newest addition to
              your morning health and well-being regime.
            </h3>
            <button>shop now</button>
          </div>
          <div className={styles.bgPhoto}>
            <img src={Background} alt="vitamins" />
          </div>
        </div>
      </section>
    );
}

export default Titles;