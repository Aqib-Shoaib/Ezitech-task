import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CSS/HeroSection.module.css";

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.title}>learn the fundamentals with our</div>
      <div className={styles.wrapper}>
        <span className={styles.static}>experts in</span>
        <ul className={styles.dynamic}>
          <li>
            <span>Marketing</span>
          </li>
          <li>
            <span>Web Design</span>
          </li>
          <li>
            <span>PhotoShop</span>
          </li>
          <li>
            <span>Front-End</span>
          </li>
          <li>
            <span>ML & AI</span>
          </li>
        </ul>
      </div>
      <p className={styles.subTitle}>
        Utilize Effective Learning to reach your potential!
      </p>
      <form action="" className={styles.searchbox}>
        <input
          type="text"
          name="text"
          id="text"
          className={styles.searchbar}
          placeholder="Search Courses!"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
      </form>
      <p className={styles.text}>Explore our more useful products</p>
      <div className={styles.logos}>
        <img
          src="src/Ezitech-imags/header_logo_1.png"
          alt="logo 1"
          className={styles.logo1}
        />
        <img
          src="src/Ezitech-imags/header_logo_2.png"
          alt="logo 2"
          className={styles.logo2}
        />
        <img
          src="src/Ezitech-imags/header_logo_3.png"
          alt="logo 3"
          className={styles.logo3}
        />
      </div>
    </div>
  );
}

export default HeroSection;
