import { IoCloseOutline } from "react-icons/io5";
import styles from './BurgerMenu.module.scss'
import { NavLink } from "react-router-dom";

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
            <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">shop</NavLink>
            </li>
            <li>
               <NavLink to="/faqs">faqs</NavLink>
            </li>
            <li>
              <NavLink to="/stockists">stockists</NavLink>  
            </li>
            <li>
              <NavLink to="/wholesale">wholesale</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </nav>
      )
    );
}

export default BurgerMenu;