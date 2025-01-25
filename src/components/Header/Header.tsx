import styles from './Header.module.scss'
import Logo from '/images/Header/Logo.svg'
import Loupe from '/images/Header/loupe.svg'
import Group from '/images/Header/group.svg'
import Basket from '/images/Header/basket.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from 'react'

const Header = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => {
    setIsOpen(true)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }


    return (
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={styles.burderIcon} onClick={openMenu}><RxHamburgerMenu size={30}/></div>
        <ul className={styles.titleList}>
          <li className={styles.underlineBlock}>
            <a href="#">home</a>
          </li>
          <li className={styles.underlineBlock}>
            <a href="#">shop</a>
          </li>
          <li className={styles.underlineBlock}>
            <a href="#">faq's</a>
          </li>
          <li className={styles.underlineBlock}>
            <a href="#">stockists</a>
          </li>
          <li className={styles.underlineBlock}>
            <a href="#">wholesale</a>
          </li>
          <li className={styles.underlineBlock}>
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

        {isOpen && (
          <div className={`${styles.burgerMenu} ${isOpen ? styles.menuVisible : styles.menuHidden}`}>
            <button onClick={closeMenu}><IoCloseOutline size={32}/></button>
            <ul>
              <li>home</li>
              <li>shop</li>
              <li>faq's</li>
              <li>stockists</li>
              <li>wholesale</li>
              <li>contact</li>
            </ul>
          </div>
        )}
      </div>
    );
}

export default Header