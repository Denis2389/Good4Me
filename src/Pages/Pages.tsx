import Header from '../components/Header/Header'
import About from '../components/Main/About/About';
import Advantages from '../components/Main/Advantages/Advantages';
import Control from '../components/Main/Control/Control';
import Process from '../components/Main/Process/Process';
import Products from '../components/Main/Products/Products';
import Reviews from '../components/Main/Reviews/Reviews';
import Titles from '../components/Main/Title/Titles';
import Vitamins from '../components/Main/Vitamins/Vitamins';
import News from '../components/Main/News/News'
import styles from './Pages.module.css'
import Footer from '../components/Footer/Footer';

const Pages = () => {
    return (
      <>
        <header>
          <Header />
        </header>
        <main className={styles.main}>
          <Titles />
          <Advantages />
          <Process />
          <Control />
          <Vitamins />
          <Products />
          <About />
          <Reviews />
          <News />
        </main>
        <footer className={styles.footer}><Footer /></footer>
      </>
    );
}

export default Pages;