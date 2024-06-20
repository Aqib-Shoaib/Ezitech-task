/* eslint-disable react/prop-types */
import styles from "./CSS/SkillComponent.module.css";

function SkillComponent({ path, heading }) {
  return (
    <div className={styles.skill}>
      <img src={path} alt="skill image " />
      <h3>{heading}</h3>
    </div>
  );
}

export default SkillComponent;
