import styles from "./CSS/Placeholder.module.css";

function Placeholder() {
  return (
    <div className={styles.placeholderContainer}>
      <img src="src/Ezitech-imags/placeholder1.png" alt="placeholder image 1" />
      <img src="src/Ezitech-imags/placeholder2.png" alt="placeholder image 2" />
      <img src="src/Ezitech-imags/placeholder3.png" alt="placeholder image 3" />
    </div>
  );
}

export default Placeholder;
