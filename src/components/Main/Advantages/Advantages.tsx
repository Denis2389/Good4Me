import styles from './Advantages.module.scss'
import D1 from '/images/Main/Advantages/D1.svg'
import D2 from '/images/Main/Advantages/D2.svg'
import D3 from '/images/Main/Advantages/D3.svg'
import D4 from '/images/Main/Advantages/D4.svg'

const Advantages = () => {
    return (
        <section className={styles.advantagesContainer}>
                <ul>
                    <li><img src={D1} alt="D1" /></li>
                    <li><img src={D2} alt="D2" /></li>
                    <li><img src={D3} alt="D3" /></li>
                    <li><img src={D4} alt="D4" /></li>
                </ul>
        </section>
    )
}

export default Advantages