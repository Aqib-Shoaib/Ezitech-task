import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CSS/InternshipItem.module.css";
import {
  faLocationArrow,
  faSuitcase,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
function InternshipItem() {
  return (
    <div className={styles.main}>
      <div className={styles.InternshipItem}>
        <div className={styles.internshipHeader}>
          <h2>HTML/CSS And JavaScript</h2>
          <img src="src/Ezitech-imags/web-design.png" alt="web design image" />
        </div>
        <p>Ezitech Institute</p>
      </div>
      <div className={styles.infoBox}>
        <div className={styles.box}>
          <div className={styles.fontBox}>
            <FontAwesomeIcon icon={faUserTie} className={styles.fontIcon} />
            <span>Employement: </span>
          </div>
          <span className={styles.boxtitle}>Hybrid</span>
        </div>
        <div className={styles.box}>
          <div>
            <FontAwesomeIcon
              icon={faLocationArrow}
              className={styles.fontIcon}
            />{" "}
            <span>Location: </span>{" "}
          </div>
          <span className={styles.boxtitle}>Rawalpindi</span>
        </div>
        <div className={styles.box}>
          <div>
            <FontAwesomeIcon icon={faSuitcase} className={styles.fontIcon} />{" "}
            <span>Job Type: </span>{" "}
          </div>
          <span className={styles.boxtitle}>Full Time - Part Time</span>
        </div>
        <button disabled="disabled">Read More</button>
      </div>
    </div>
  );
}

export default InternshipItem;
