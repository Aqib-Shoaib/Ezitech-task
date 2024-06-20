/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./CSS/Slider.module.css";

const Slider = ({ slides }) => {
  const allComps = slides;
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 4 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 4 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
      <div className={styles.slidesContainer}>
        {allComps.slice(current, current + 4).map((slide, index) => (
          <div className={styles.slide} key={index}>
            {slide}
          </div>
        ))}
      </div>
      <div className={styles.navigation}>
        <button
          className={styles.arrow}
          onClick={prevSlide}
          disabled={current === 0}
        >
          &#10094;
        </button>
        <button
          className={styles.arrow}
          onClick={nextSlide}
          disabled={current === length - 4}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Slider;
