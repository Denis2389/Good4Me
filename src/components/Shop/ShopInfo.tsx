import styles from './ShopInfo.module.scss'
import product1 from '/images/Main/Products/product1.png';
import product2 from '/images/Main/Products/product2.png';
import product3 from '/images/Main/Products/product3.png';

const ShopInfo = () => {
    return (
      <section className={styles.shopInfoContainer}>
        <h2>Shop</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img src={product1} alt="products1" />
            <h5>FULL RANGE VALUE PACK</h5>
              <strong className={styles.pTitle}>
                $134.95 NZD<span>$199.75 NZD</span>
              </strong>
          </li>
          <li className={styles.item}>
            <img src={product2} alt="products2" />
            <h5>Complete Wellness Bundle</h5>
              <strong className={styles.pTitle}>
                $134.95 NZD<span>$199.75 NZD</span>
              </strong>
          </li>
          <li className={styles.item}>
            <img src={product3} alt="products3" />
            <h5>Ultimate Health Pack</h5>
            <strong className={styles.pTitle}>
              $134.95 NZD<span>$199.75 NZD</span>
            </strong>
          </li>
          <li className={styles.item}>
            <img src={product3} alt="products3" />
            <h5>Ultimate Health Pack</h5>
            <strong className={styles.pTitle}>
              $134.95 NZD<span>$199.75 NZD</span>
            </strong>
          </li>
          <li className={styles.item}>
            <img src={product2} alt="products2" />
            <h5>Complete Wellness Bundle</h5>
              <strong className={styles.pTitle}>
                $134.95 NZD<span>$199.75 NZD</span>
              </strong>
          </li>
          <li className={styles.item}>
            <img src={product1} alt="products1" />
            <h5>FULL RANGE VALUE PACK</h5>
              <strong className={styles.pTitle}>
                $134.95 NZD<span>$199.75 NZD</span>
              </strong>
          </li>
          <li className={styles.item}>
            <img src={product1} alt="products1" />
            <h5>FULL RANGE VALUE PACK</h5>
              <strong className={styles.pTitle}>
                $134.95 NZD<span>$199.75 NZD</span>
              </strong>
          </li>
          <li className={styles.item}>
            <img src={product2} alt="products2" />
            <h5>Complete Wellness Bundle</h5>
              <strong className={styles.pTitle}>
                $134.95 NZD<span>$199.75 NZD</span>
              </strong>
          </li>
          <li className={styles.item}>
            <img src={product3} alt="products3" />
            <h5>Ultimate Health Pack</h5>
            <strong className={styles.pTitle}>
              $134.95 NZD<span>$199.75 NZD</span>
            </strong>
          </li>
          <li className={styles.item}>
            <img src={product3} alt="products3" />
            <h5>Ultimate Health Pack</h5>
            <strong className={styles.pTitle}>
              $134.95 NZD<span>$199.75 NZD</span>
            </strong>
          </li>
        </ul>
      </section>
    );
}

export default ShopInfo