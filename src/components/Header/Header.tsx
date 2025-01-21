import styles from './Header.module.scss'
import Logo from '/images/Header/Logo.svg'
import Loupe from '/images/Header/loupe.svg'
import Group from '/images/Header/group.svg'
import Basket from '/images/Header/basket.svg'

const Header = () => {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <ul className={styles.titleList}>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">shop</a>
          </li>
          <li>
            <a href="#">faq's</a>
          </li>
          <li>
            <a href="#">stockists</a>
          </li>
          <li>
            <a href="#">wholesale</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
        <ul className={styles.svgList}>
          <li>
            <a href="#">
              <img src={Loupe} alt="Loupe" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Group} alt="Group" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Basket} alt="Basket" />
            </a>
          </li>
        </ul>
      </div>
    );
}

export default Header