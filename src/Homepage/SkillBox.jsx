import SkillComponent from "./SkillComponent";
import styles from "./CSS/SkillBox.module.css";

function SkillBox() {
  return (
    <div className={styles.container}>
      <SkillComponent path="src/Ezitech-imags/ML&AI.png" heading="ML & AI" />
      <SkillComponent path="src/Ezitech-imags/3d.png" heading="3D" />
      <SkillComponent
        path="src/Ezitech-imags/cccccc.png"
        heading="Cyber Security"
      />
      <SkillComponent path="src/Ezitech-imags/ffff.png" heading="HTML/CSS" />
      <SkillComponent
        path="src/Ezitech-imags/mobile_png.png"
        heading="App Dev."
      />
      <SkillComponent
        path="src/Ezitech-imags/social-media.png"
        heading="Marketing"
      />
      <SkillComponent
        path="src/Ezitech-imags/ssss.png"
        heading="Architecture"
      />
      <SkillComponent path="src/Ezitech-imags/vvvv.png" heading="Gaming" />
      <SkillComponent path="src/Ezitech-imags/www.png" heading="Designing" />
      <SkillComponent
        path="src/Ezitech-imags/blockchain.png"
        heading="BlockChain"
      />
      <SkillComponent
        path="src/Ezitech-imags/animation.png"
        heading="Animation"
      />
      <SkillComponent path="src/Ezitech-imags/aaaa.png" heading="Amazon" />
    </div>
  );
}

export default SkillBox;
