import styles from './About.module.scss'
import bottleBg from './bottle.png'

const About = () => {
    return (
      <section className={styles.aboutContainer}>
        <h2>WHAT'S IN GOOD4ME?</h2>
        <p className={styles.description}>
          Discover a unique blend of essential vitamins and minerals for daily
          wellness.
        </p>
        <div className={styles.wrapper}>
          <div className={styles.leftBlockList}>
            <ul>
              <li>
                <h4>SUPPORTS WEIGHT MANAGEMENT</h4>
                <p>
                  Supports weight management by promoting balanced nutrition and
                  a healthy lifestyle.
                </p>
              </li>
              <li>
                <h4>SUPPORTS HEALTHY SKIN</h4>
                <p>
                  Supports healthy skin by nourishing it with essential vitamins
                  and hydration.
                </p>
              </li>
              <li>
                <h4>SUPPORTS OVERALL HEALTH AND WELLBEING</h4>
                <p>
                  Supports overall health and wellbeing through balanced
                  nutrition and active living.
                </p>
              </li>
            </ul>
          </div>
            <img src={bottleBg} alt="bottle" />
          <div className={styles.rigthBlockList}>
            <ul>
              <li>
                <h4>SUPPORTS WHOLE BODY CLEANSE & DETOXIFICATION</h4>
                <p>
                  Supports whole body cleanse and detoxification by aiding
                  natural toxin removal.
                </p>
              </li>
              <li>
                <h4>PROMOTES NATURAL DIGESTIVE HEALTH</h4>
                <p>
                  Enhances digestive health by supporting a balanced gut
                  microbiome and regularity.
                </p>
              </li>
              <li>
                <h4>BOOSTS IMMUNE SYSTEM FUNCTION</h4>
                <p>
                  Boosts immune system function with essential nutrients for
                  daily defense support.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
}

export default About;