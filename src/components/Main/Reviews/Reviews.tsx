import 'swiper/swiper-bundle.css'
import styles from './Reviews.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules';
import quote from '/images/Main/Reviews/quote.svg'
import sophiePh from '/images/Main/Reviews/SophieRev.svg'
import benjaminPh from '/images/Main/Reviews/BenjaminRev.svg'
import coralianRev from '/images/Main/Reviews/CoralianRev.svg'


const Reviews = () => {
    return (
      <section className={styles.reviewsContainer}>
        <h2>What Our Happy Cilents Say</h2>
        <div className={styles.secondSwiper}>
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            loop={true}
            allowTouchMove={true}
            slidesPerView={3}
            spaceBetween={40}
            className={styles.secondSwiper}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2, spaceBetween: 50 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide className={styles.secondSwiperSlide}>
              <div className={styles.flex}>
                <div className={styles.flexPhoto}>
                  <div className={styles.personImg}>
                    <img src={sophiePh} alt="sophiePh" />
                  </div>
                  <div className={styles.flexName}>
                    <h4>Sophie M</h4>
                    <h5>Management Support</h5>
                  </div>
                </div>
                <img
                  style={{ marginLeft: "auto", paddingRight: "25px" }}
                  src={quote}
                  alt="quote"
                />
              </div>
              <p>
                “We have perfected our formulas over time, based on your
                feedback. Check out hundreds of reviews on our website. We can't
                wait until you are a part of our Good4Me Family.”
              </p>
            </SwiperSlide>
            <SwiperSlide className={styles.secondSwiperSlide}>
              <div className={styles.flex}>
                <div className={styles.flexPhoto}>
                  <div className={styles.personImg}>
                    <img src={coralianRev} alt="coralianPh" />
                  </div>
                  <div className={styles.flexName}>
                    <h4>Coralieanne T</h4>
                    <h5>Management Support</h5>
                  </div>
                </div>
                <img
                  style={{ marginLeft: "auto", paddingRight: "25px" }}
                  src={quote}
                  alt="quote"
                />
              </div>
              <p>
                “Our commitment to quality grows stronger every day, thanks to
                your invaluable support. Discover why so many customers trust us
                by reading their stories on our website.”
              </p>
            </SwiperSlide>
            <SwiperSlide className={styles.secondSwiperSlide}>
              <div className={styles.flex}>
                <div className={styles.flexPhoto}>
                  <div className={styles.personImg}>
                    <img src={benjaminPh} alt="coralianPh" />
                  </div>
                  <div className={styles.flexName}>
                    <h4>Benjamin W</h4>
                    <h5>Management Support</h5>
                  </div>
                </div>
                <img
                  style={{ marginLeft: "auto", paddingRight: "25px" }}
                  src={quote}
                  alt="quote"
                />
              </div>
              <p>
                “At Good4Me, we strive to create products that make a difference
                in your life. Hear from countless happy customers who have
                shared their journeys on our website.”
              </p>
            </SwiperSlide>
            <SwiperSlide className={styles.secondSwiperSlide}>
              <div className={styles.flex}>
                <div className={styles.flexPhoto}>
                  <div className={styles.personImg}>
                    <img src={coralianRev} alt="coralianPh" />
                  </div>
                  <div className={styles.flexName}>
                    <h4>Coralieanne T</h4>
                    <h5>Management Support</h5>
                  </div>
                </div>
                <img
                  style={{ marginLeft: "auto", paddingRight: "25px" }}
                  src={quote}
                  alt="quote"
                />
              </div>
              <p>
                “Our commitment to quality grows stronger every day, thanks to
                your invaluable support. Discover why so many customers trust us
                by reading their stories on our website.”
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    );
}

export default Reviews