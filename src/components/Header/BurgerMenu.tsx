import { IoCloseOutline } from "react-icons/io5";
import styles from './BurgerMenu.module.scss'

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, setIsOpen }) => {

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
      isOpen && (
        <nav className={`${styles.burgerMenu} ${isOpen ? styles.menuVisible : styles.menuHidden}`}>
          <button className={styles.burgerIcon} onClick={closeMenu}>
            <IoCloseOutline size={40}/>
          </button>
          <ul>
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
        </nav>
      )
    );
}

export default BurgerMenu;