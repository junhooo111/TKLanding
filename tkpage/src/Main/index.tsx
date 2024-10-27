import styles from "./style.module.scss";
import mainImage1 from "../images/main-image1.webp";

export function Main() {
  return (
    <div className={styles.component}>
      <img src={mainImage1} alt="main1" />
    </div>
  );
}
