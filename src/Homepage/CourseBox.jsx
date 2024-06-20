/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CSS/CourseBox.module.css";
import { faClock } from "@fortawesome/free-solid-svg-icons";
function CourseBox({ data }) {
  return (
    <div className={styles.courseBox}>
      <img
        className={styles.imageBox}
        src={data.image}
        alt={`${data.title} course image`}
      />
      <div className={styles.titleBox}>
        <h5 className={styles.title}>{data.title}</h5>
        <h3>{data.subTitle}</h3>
      </div>
      <div className={styles.price}>
        <div>
          <FontAwesomeIcon icon={faClock} /> <span>{data.time}</span>
        </div>
        <div className={styles.priceBox}>
          <span className={styles.oldPrice}>
            {data.oldPrice ? data.oldPrice : ""}
          </span>
          {data.price}
        </div>
      </div>
    </div>
  );
}

export default CourseBox;
