import styles from './About.module.scss'
import bottleBg from './bottle.png'

const About = () => {
    return (
      <section className={styles.aboutContainer}>
        <h2>WHAT'S IN GOOD4ME?</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
        <div className={styles.product}>
          <img src={bottleBg} alt="bottle" />
          <div className={styles.labels}>
            <div className={`${styles.label} ${styles.label1}`}>
              <strong>SUPPORTS WEIGHT MANAGEMENT</strong>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </p>
            </div>
            <div className={`${styles.label} ${styles.label2}`}>
              <strong>SUPPORTS HEALTHY SKIN</strong>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable layout.
              </p>
            </div>
            <div className={`${styles.label} ${styles.label3}`}>
              <strong>SUPPORTS OVERALL HEALTH AND WELLBEING</strong>
              <p>It is a long established fact that a reader will be distracted by the readable layout.</p>
            </div>
            <div className={`${styles.label} ${styles.label4}`}>
                <strong>SUPPORTS WHOLE BODY 
                CLEANSE & DETOXIFICATION</strong>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
            </div>
            <div className={`${styles.label} ${styles.label5}`}>
                <strong>SUPPORTS OVERALL 
                HEALTH AND WELLBEING</strong>
                <p>It is a long established fact that a reader will be distracted by the readable layout.</p>
            </div>
            <div className={`${styles.label} ${styles.label6}`}>
                <strong>SUPPORTS HEALTHY SKIN</strong>
                <p>It is a long established fact that a reader will be distracted by the readable layout.</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;