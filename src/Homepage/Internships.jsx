import styles from "./CSS/Internships.module.css";
import InternshipItem from "./InternshipItem";

function Internships() {
  return (
    <div className={styles.Internships}>
      <div className={styles.InternshipsBox}>
        <InternshipItem />
        <InternshipItem />
        <InternshipItem />
        <InternshipItem />
        <InternshipItem />
        <InternshipItem />
      </div>
      <button disabled="disabled">Load More</button>
    </div>
  );
}

export default Internships;
