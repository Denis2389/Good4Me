import styles from './Footer.module.scss'
import logo from '/images/Header/Logo.svg'
import facebook from '/images/Footer/facebook.svg'
import instagram from '/images/Footer/instagram.svg'
import pinterest from '/images/Footer/pinterest.svg'
import twiter from '/images/Footer/twiter.svg'
import youtube from '/images/Footer/youtube.svg'
import cards from '/images/Footer/cards.png'

const Footer = () => {
    return (
      <div>
        <div className={styles.footer}>
          <div className={styles.firstBlock}>
            <img src={logo} alt="logo" />
            <p>
              Good health is important, so all of our products have been
              carefully designed to bring out the best in you.
            </p>
          </div>
          <div className={styles.secondBlock}>
            <h3>Keep In Touch</h3>
            <p>
              Subscribe to receive new product updates, be the first to know
              about sales, and more.
            </p>
            <div className={styles.inputContainer}>
              <input type="email" placeholder="Enter your email" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className={styles.thirdBlock}>
            <h3>MORE INFO</h3>
            <ul>
              <li>
                <a href="#">Shipping & Delivery</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Partner Program</a>
              </li>
              <li>
                <a href="#">Wholesale Portal</a>
              </li>
              <li>
                <a href="#">You Buy, We Donate</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerLastBlock}>
          <ul>
            <li>
              <img src={facebook} alt="facebook" />
            </li>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
            <li>
              <img src={twiter} alt="twiter" />
            </li>
            <li>
              <img src={pinterest} alt="pinterest" />
            </li>
            <li>
              <img src={youtube} alt="youtube" />
            </li>
          </ul>
          <p>
            © 2021, <span>GOOD4ME</span>. Powered by Shopify
          </p>
          <div className={styles.cards}><img src={cards} alt="cards" /></div>
        </div>
      </div>
    );
}

export default Footer;

