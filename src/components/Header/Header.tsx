import styles from './Header.module.scss'
import Logo from '/images/Header/Logo.svg'
import Loupe from '/images/Header/loupe.svg'
import Group from '/images/Header/group.svg'
import Basket from '/images/Header/basket.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react'
import BurgerMenu from './BurgerMenu'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => {
    setIsOpen(true)
  }


    return (
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <NavLink to='/'>
          <img src={Logo} alt="Logo" />
          </NavLink>
        </div>
        <div className={styles.burderIcon} onClick={openMenu}>
          <RxHamburgerMenu size={30} />
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.titleList}>
            <li className={styles.underlineBlock}>
              <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>home</NavLink>
            </li>
            <li className={styles.underlineBlock}>
              <NavLink to="/shop" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>shop</NavLink>
            </li>
            <li className={styles.underlineBlock}>
              <NavLink to="/faqs" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>faqs</NavLink>
            </li>
            <li className={styles.underlineBlock}>
              <NavLink to="/stockists" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>stockists</NavLink>
            </li>
            <li className={styles.underlineBlock}>
              <NavLink to="/wholesale" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>wholesale</NavLink>
            </li>
            <li className={styles.underlineBlock}>
              <NavLink to="/contact" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>contact</NavLink>
            </li>
          </ul>
        </nav>

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

        {isOpen && <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    );
}

export default Header