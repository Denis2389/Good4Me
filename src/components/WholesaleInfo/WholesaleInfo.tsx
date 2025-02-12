import styles from './WholesaleInfo.module.scss'

const WholesaleInfo = () => {
    return (
      <section className={styles.whosaleContainer}>
        <div className={styles.titleBlock}>
          <h2>Wholesale – Partner with Us 🏢</h2>
          <p>
            Are you looking to stock high-quality vitamins and supplements in
            your store? We offer wholesale partnerships for businesses that want
            to provide their customers with premium health products.
          </p>
        </div>
        <div className={styles.firstBlock}>
          <h3>🔹 Why Choose Us?</h3>
          <ul>
            <li>✅ High-quality, scientifically formulated supplements</li>
            <li>✅ Competitive wholesale pricing</li>
            <li>✅ Reliable supply chain and fast shipping</li>
            <li>✅ Marketing support to boost your sales</li>
          </ul>
        </div>
        <div className={styles.secondBlock}>
          <h3>🤝 Who Can Benefit from Our Wholesale Program?</h3>
          <ul>
            <li>✔️ Health and wellness stores</li>
            <li>✔️ Pharmacies and drugstores</li>
            <li>✔️ Online retailers and e-commerce shops</li>
            <li>✔️ Gyms, spas, and wellness centers</li>
          </ul>
        </div>
        <div className={styles.thirdBlock}>
          <h3>📩 Get in Touch!</h3>
          <p>
            Interested in becoming a wholesale partner? Contact us today to
            discuss pricing, bulk orders, and exclusive deals. Let's grow
            together and bring better health to more people! 🚀
          </p>
        </div>
      </section>
    );
}

export default WholesaleInfo