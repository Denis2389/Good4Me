import styles from './FaqsInfo.module.scss'
import botlePh from '../Main/About/bottle.png'

const FaqsInfo = () => {
    return (
      <section className={styles.faqsInfoSection}>
        <ul className={styles.list}>
          <li>
            <h3>SUPPORTS WEIGHT MANAGEMENT</h3>
            <p>
              Supports weight management by promoting balanced nutrition and a
              healthy lifestyle.
            </p>
          </li>
          <li>
            <h3>SUPPORTS HEALTHY SKIN</h3>
            <p>
              Supports healthy skin by nourishing it with essential vitamins and
              hydration.
            </p>
          </li>
          <li>
            <h3>SUPPORTS OVERALL HEALTH AND WELLBEING</h3>
            <p>
              Supports overall health and wellbeing through balanced nutrition
              and active living.
            </p>
          </li>
          <li>
            <h3>SUPPORTS WHOLE BODY CLEANSE & DETOXIFICATION</h3>
            <p>
              Supports whole body cleanse and detoxification by aiding natural
              toxin removal.
            </p>
          </li>
          <li>
            <h3>PROMOTES NATURAL DIGESTIVE HEALTH</h3>
            <p>
              Enhances digestive health by supporting a balanced gut microbiome
              and regularity.
            </p>
          </li>
          <li>
            <h3>BOOSTS IMMUNE SYSTEM FUNCTION</h3>
            <p>
              Boosts immune system function with essential nutrients for daily
              defense support.
            </p>
          </li>
        </ul>
        <div className={styles.bottlePng}><img src={botlePh} alt="bottle" /></div>
      </section>
    );
}  

export default FaqsInfo;