import styles from './News.module.scss'
import firstPh from '/images/Main/News/first.png'
import secondPh from '/images/Main/News/second.png'
import thirdPh from '/images/Main/News/third.png'
import { FaArrowRightLong } from "react-icons/fa6";
import Ph1 from '/images/Main/News/1.png'
import Ph2 from '/images/Main/News/2.png'
import Ph3 from '/images/Main/News/3.png'
import Ph4 from '/images/Main/News/4.png'

const News = () => {
    return (
      <section className={styles.newsContainer}>
        <div className={styles.firstNewsWrapper}>
          <h2>Latest news</h2>
          <strong>
            Latest updates will be available soon. Stay tuned for new releases
            and announcements.
          </strong>
          <ul>
            <li>
              <img src={firstPh} alt="firstPh" />
              <h3>WE DONATE ONE WEEKS SUPPLY</h3>
              <p>We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve..</p>
              <a href="#">READ MORE <FaArrowRightLong/></a>
            </li>
            <li>
              <img src={secondPh} alt="secondPh" />
              <h3>WE SUPPORT HEALTHY GROWTH</h3>
              <p>We believe every child deserves a healthy start. Our mission is to provide New Zealand children with essential nutrients and vitamins to help them grow strong and healthy.</p>
              <a href="#">READ MORE <FaArrowRightLong/></a>
            </li>
            <li>
              <img src={thirdPh} alt="thirdPh" />
              <h3>NOURISHING FUTURES</h3>
              <p>We are committed to the future of New Zealand's children. Our goal is to supply vital vitamins to those in need, helping to promote healthier lives and brighter futures.</p>
              <a href="#">READ MORE <FaArrowRightLong/></a>
            </li>
          </ul>
        </div>
        <div className={styles.secondNewsWrapper}>
            <ul>
                <li><img src={Ph1} alt="Ph1" /></li>
                <li><img src={Ph2} alt="Ph2" /></li>
                <li><img src={Ph3} alt="Ph3" /></li>
                <li><img src={Ph4} alt="Ph4" /></li>
            </ul>
            <p>@GOOD4ME</p>
        </div>
      </section>
    );
}

export default News