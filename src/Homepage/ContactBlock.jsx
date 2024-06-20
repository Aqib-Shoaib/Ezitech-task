import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBehance,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./CSS/ContactBlock.module.css";
function contactBlock() {
  return (
    <div className={styles.container}>
      <div></div>
      <div>
        <FontAwesomeIcon className={styles.icons} icon={faPhone} />
        +92 3455555396
      </div>
      <div className={styles.location}>
        <FontAwesomeIcon className={styles.icons} icon={faLocationDot} />{" "}
        Westridge 1, Office #304-B Peshawar Road, Rawalpindi, Pakistan
      </div>
      <div className={styles.timeFrame}>
        <FontAwesomeIcon className={styles.icons} icon={faClock} />
        Mon - Fri 8.00 - 20.00
      </div>
      <div className={styles.socialIcons}>
        <a href="https://web.facebook.com/ezitech?_rdc=1&_rdr">
          <FontAwesomeIcon className={styles.icons} icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/ezitechpk/">
          <FontAwesomeIcon className={styles.icons} icon={faInstagram} />
        </a>
        <a href="https://www.behance.net/ezitech">
          <FontAwesomeIcon className={styles.icons} icon={faBehance} />
        </a>
        <a href="https://pk.linkedin.com/company/ezitechpk">
          <FontAwesomeIcon className={styles.icons} icon={faLinkedin} />
        </a>
        <a href="https://www.youtube.com/channel/UCPJvS7gvIV9nm6paydinYWg">
          <FontAwesomeIcon className={styles.icons} icon={faYoutube} />
        </a>
      </div>
      <div className={styles.registeration}>
        <FontAwesomeIcon className={styles.icons} icon={faUser} />
        Login | Register
      </div>
    </div>
  );
}

export default contactBlock;
