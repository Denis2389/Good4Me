import Header from '../components/Header/Header'
import About from '../components/Main/About/About';
import Advantages from '../components/Main/Advantages/Advantages';
import Control from '../components/Main/Control/Control';
import Process from '../components/Main/Process/Process';
import Products from '../components/Main/Products/Products';
import Titles from '../components/Main/Title/Titles';
import Vitamins from '../components/Main/Vitamins/Vitamins';
import styles from './Pages.module.sass'

const Pages = () => {
    return (
      <>
        <header className={styles.header}>
          <Header />
        </header>
        <main>
          <Titles />
          <Advantages />
          <Process />
          <Control />
          <Vitamins />
          <Products />
          <About />
        </main>
      </>
    );
}

export default Pages;