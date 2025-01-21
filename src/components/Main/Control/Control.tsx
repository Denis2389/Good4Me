import styles from './Control.module.scss'
import girlPhoto from '/images/Main/Control/girl.png'

const Control = () => {
    return (
      <section className={styles.controlContainer}>
        <div className={styles.textBlock}>
          <div className={styles.photoGirl}>
            <img src={girlPhoto} alt="girl" />
          </div>
          <ul>
            <div>
              <li>
                <h3>It is a long established fact that a reader</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the...
                </p>
              </li>
              <li>
                <h3>Typography speaks volumes</h3>
                <p>
                  Typography speaks volumes even when the content is silent.
                </p>
              </li>
            </div>
            <div>
              <li>
                <h3>Design is a story well told</h3>
                <p>
                  Design is a story well told that connects hearts and minds.
                </p>
              </li>
              <li>
                <h3>A well-known truth in design</h3>
                <p>
                  A well-known truth in design is that clarity always enhances
                  understanding.
                </p>
              </li>
            </div>
          </ul>
        </div>
        <div className={styles.titleTexts}>
          <h2>take control of your health</h2>
          <p className={styles.paragraph}>
            The Good4Me range has been formulated based on scientific. Our
            vitamins are here and ready to boost your mood, immunity and overall
            well-being!
          </p>
          <p>
            Our vitamins are here and ready to boost your mood. New Zealand from
            local and imported ingredients.
          </p>
          <button>browse our range</button>
        </div>
      </section>
    );
}

export default Control