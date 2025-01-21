import styles from './Process.module.scss'
import ecology from '/images/Main/Process/ecology.svg'
import lab from '/images/Main/Process/lab.svg'
import shield from '/images/Main/Process/shield.svg'

const Process = () => {
    return (
      <section className={styles.processContainer}>
        <h2>We Have The Main Process to Run The GOOD4ME</h2>
        <ul>
            <li>
                <div className={styles.svgBorder}><img src={shield} alt="shield" /></div>
                <h3>Quality Assured</h3>
                <p>Quality Assured ensures products meet rigorous standards for safety, performance, and reliability, guaranteeing customer satisfaction.</p>
            </li>
            <li className={styles.cleanCont}>
                <div className={styles.svgBorderDif}><img src={ecology} alt="ecology" /></div>
                <h3>Clean Ingredients</h3>
                <p>Clean Ingredients focuses on natural, healthy components free from artificial additives or harmful chemicals, prioritizing sustainability and wellness.</p>
            </li>
            <li>
                <div className={styles.svgBorder}><img src={lab} alt="lab" /></div>
                <h3>Chemical Free</h3>
                <p>Chemical Free promotes products without harmful chemicals, ensuring safety and purity for consumers and the environment.</p>
            </li>
        </ul>
      </section>
    );
}

export default Process