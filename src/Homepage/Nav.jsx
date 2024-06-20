import { faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CSS/Nav.module.css";
function Nav() {
  return (
    <div className={styles.nav}>
      <div>
        <img
          src="src/Ezitech-imags/ezitech_logo_white.png"
          alt="ezitech logo"
          height={70}
          width={200}
        />
      </div>
      <ul className={styles.list}>
        <li className={styles.link}>
          <a href="/" className={styles.active}>
            Home
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://ezitech.org/about-ezitech/">About Us</a>
        </li>
        <li className={styles.link}>
          <a href="https://ezitech.org/about-ezitech/">Certifications</a>
        </li>
        <li className={styles.link}>
          <a href="http://ezitech.org/internship-program/">Internships</a>
        </li>
        <li className={styles.link}>
          <a href="https://ezitech.org/seminars/">Smeinars</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.register.ezitech.org/?_gl=1*12iz38j*_ga*Nzc1OTY5MjI3LjE3MTg1MTU3NDY.*_ga_2XEX0EBCTP*MTcxODUyOTU4Mi41LjAuMTcxODUyOTU4NS4wLjAuMA..">
            Internship Registeration
          </a>
        </li>
      </ul>
      <div className={styles.icons}>
        <span>|</span>
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.glass} />
      </div>
    </div>
  );
}

export default Nav;
