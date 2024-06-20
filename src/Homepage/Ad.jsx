import styles from "./CSS/Ad.module.css";

function Ad() {
  return (
    <div className={styles.main}>
      <div className={styles.img}>
        <img src="src/Ezitech-imags/phone-copy.webp" alt="phone copy image" />
      </div>
      <div className={styles.info}>
        <h2>
          Learning <span>anytime</span> Anything from Anywhere!
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          molestiae ad est quae ullam excepturi perferendis sed saepe?
          Reiciendis, enim?
        </p>
        <div>
          <button disabled="disabled">
            <img src="src/Ezitech-imags/app_store.webp" alt="app store icon" />
          </button>
          <button disabled="disabled">
            <img
              src="src/Ezitech-imags/google_play.png"
              alt="google play icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ad;
