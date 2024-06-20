import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CSS/Footer.module.css";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className={styles.footer}>
      <h2 className={styles.footerHeading}>
        It&apos;s Time to <span>start</span> investing in yourself
      </h2>
      <img src="src/Ezitech-imags/footer.webp" alt="footer image" />
      <div className={styles.bottom}>
        <div className={styles.about}>
          <h3>About Us</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut
            id sunt. Voluptas, possimus ut.
          </p>
        </div>
        <div className={styles.courses}>
          <h3>Popular Courses</h3>
          <div className={styles.courseBox}>
            <img src="src/Ezitech-imags/seo.jpg" alt="seo course image" />
            <div>
              <span>Seo Course for Beginners </span>
              <span className={styles.author}>By Aqib Shoaib</span>
            </div>
          </div>
          <div className={styles.courseBox}>
            <img src="src/Ezitech-imags/seo.jpg" alt="seo course image" />
            <div>
              <span>Seo Course for Beginners </span>
              <span className={styles.author}>By Aqib Shoaib</span>
            </div>
          </div>
        </div>
        <ul className={styles.pages}>
          <h3>Pages</h3>
          <li>About us</li>
          <li>Ezicoding</li>
          <li>Contact US</li>
          <li>Internships</li>
        </ul>
        <div className={styles.contactbox}>
          <h3>Contact Us</h3>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab
              46000
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <span>+923455555396</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>info@ezitech.org</span>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        Copyright © 2024 Ezitech Institute | Design & Develop by Eziline
        Software House
      </p>
    </div>
  );
}

export default Footer;
