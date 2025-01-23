import styles from './Products.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../../node_modules/swiper/swiper-bundle.css'
import { Navigation } from 'swiper/modules';
import product1 from '/images/Main/Products/product1.png';
import product2 from '/images/Main/Products/product2.png';
import product3 from '/images/Main/Products/product3.png'
import girlPng from './girl.png'
import './button.css'

const Products = () => {
    return (
      <section className={styles.productsContainer}>
        <div className={styles.textContainer}>
          <h4>GAME-CHANGING VITAMINS</h4>
          <h3>OUR PRODUCTS ARE</h3>
          <p>
            Low in sugar (sweetened with a fruit base) Free from gluten,
            gelatine, dairy, egg,nutsor soy Free from artificial flavours or
            colours Vegan friendly It is a long established fact that a reader
            will be distracted by the Free from artificial flavours or colours
            Vegan friendly It is a long established fact that a reader will be
            distracted by the...
          </p>
          <div className={styles.swiperCont}>
            <Swiper
              spaceBetween={30}
              loop={true}
              slidesPerView={3}
              navigation={true}
              className={styles.swiperBlock}
              modules={[Navigation]}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.cardList}>
                  <img src={product1} alt="products1" />
                  <h5>FULL RANGE VALUE PACK</h5>
                  <strong className={styles.pTitle}>
                    $134.95 NZD<span>$199.75 NZD</span>
                  </strong>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.cardList}>
                  <img src={product2} alt="products2" />
                  <h5>FULL RANGE VALUE PACK </h5>
                  <strong className={styles.pTitle}>
                    $134.95 NZD<span>$199.75 NZD</span>
                  </strong>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.cardList}>
                  <img src={product3} alt="products3" />
                  <h5>FULL RANGE VALUE PACK </h5>
                  <strong className={styles.pTitle}>
                    $134.95 NZD<span>$199.75 NZD</span>
                  </strong>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.cardList}>
                  <img src={product2} alt="products2" />
                  <h5>FULL RANGE VALUE PACK </h5>
                  <strong className={styles.pTitle}>
                    $134.95 NZD<span>$199.75 NZD</span>
                  </strong>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.cardList}>
                  <img src={product1} alt="products1" />
                  <h5>FULL RANGE VALUE PACK</h5>
                  <strong className={styles.pTitle}>
                    $134.95 NZD<span>$199.75 NZD</span>
                  </strong>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.cardList}>
                  <img src={product2} alt="products2" />
                  <h5>FULL RANGE VALUE PACK </h5>
                  <strong className={styles.pTitle}>
                    $134.95 NZD<span>$199.75 NZD</span>
                  </strong>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={styles.photoContainer}>
          <div className={styles.pngBg}>
            <img src={girlPng} alt="girlPng" />
          </div>
        </div>
      </section>
    );
}

export default Products