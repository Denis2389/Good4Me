import styles from './Vitamins.module.scss'
import vitaminPhoto from '/images/Main/Vitamins/Vitamins.png'

const Vitamins = () => {
    return (
        <section className={styles.vitaminsContainer}>
            <div className={styles.firstTitle}>
                <img src={vitaminPhoto} alt="vitamins" />
            </div>
            <div className={styles.secondTitle}>
                <h2>VITAMIN C: IMMUNITY SUPPORT (3 MONTH SUPPLY)</h2>
                <h4>$134.95 NZD <span>$199.75 NZD</span></h4>
                <p>Adults take 2 soft-chews daily, or as advised by your healthcare professional. Our vitamins are here and ready to boost your mood, immunity and overall well-being! Made in New Zealand from local and imported ingredients.professional. Our vitamins are here and ready to boost your mood, immunity and overall well-being!</p>
                <button>shop now</button>
            </div>
        </section>
    )
}

export default Vitamins