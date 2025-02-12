import styles from './StockistsInfo.module.scss'

const StockistsInfo = () => {
    return (
      <section className={styles.stockistsInfoContainer}>
        <div className={styles.firstBlock}>
          <h2>Stockists – Where to Buy Our Vitamins 🏪</h2>
          <p>
            Looking for a place to purchase our vitamins and health supplements?
            We partner with trusted retailers to make our products easily
            accessible to you!
          </p>
        </div>
        <div className={styles.secondBlock}>
          <h3>🔍 Where to Find Us</h3>
          <p>You can find our products at:</p>
          <ul>
            <li>
              ✅ Health and wellness stores – Carefully selected shops that
              prioritize quality supplements.
            </li>
            <li>
              ✅ Pharmacies – Trusted locations where you can get expert advice
              on our vitamins.
            </li>
            <li>
              ✅ Online marketplaces – Order from the comfort of your home with
              fast and reliable delivery.
            </li>
            <li>
              ✅ Specialty organic stores – For those who prefer natural and
              eco-friendly products.
            </li>
          </ul>
        </div>
        <div className={styles.thirdBlock}>
          <h3>🛒 Why Choose Our Stockists?</h3>
          <ul>
            <li>✔️ They provide authentic and certified products.</li>
            <li>
              ✔️ You get access to exclusive in-store promotions and discounts.
            </li>
            <li>
              ✔️ Knowledgeable staff can help you choose the right supplements
              for your needs.
            </li>
          </ul>
        </div>
        <p className={styles.lastBlock}>
          ✨ Stay healthy and shop with confidence at our trusted stockists! ✨
        </p>
      </section>
    );
}

export default StockistsInfo