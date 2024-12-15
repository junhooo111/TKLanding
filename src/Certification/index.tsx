import { TitleComponent } from "../common/components/TitleComponent";
import styles from "./style.module.scss";
import certImage1 from "./images/cert1.jpg";
import certImage2 from "./images/cert2.jpg";
import certImage3 from "./images/cert3.jpg";
import certImage4 from "./images/cert4.jpg";
import certImage5 from "./images/cert5.jpg";
import certImage6 from "./images/cert6.jpg";
import certImage7 from "./images/cert7.jpg";
import certImage8 from "./images/cert8.jpg";
import certImage9 from "./images/cert9.jpg";
import certImage10 from "./images/cert10.jpg";
import certImage11 from "./images/cert11.jpg";
import certImage12 from "./images/cert12.jpg";

export function Certification() {
  return (
    <div className={styles.component}>
      <TitleComponent label="특허 및 인증서" />
      <div className={styles.imageWrapper}>
        <div className={styles.imageRow}>
          <div className={styles.wrapper}>
            <img src={certImage1} alt="cert1" />
          </div>
        </div>
        <div className={styles.imageRow}>
          <div className={styles.wrapper}>
            <img src={certImage2} alt="cert2" />
          </div>
          <div className={styles.wrapper}>
            <img src={certImage3} alt="cert3" />
          </div>
          <div className={styles.wrapper}>
            <img src={certImage4} alt="cert4" />
          </div>
        </div>
        <div className={styles.imageRow}>
          <div className={styles.wrapper}>
            <img src={certImage5} alt="cert5" />
          </div>
          <div className={styles.wrapper}>
            <img src={certImage6} alt="cert6" />
          </div>
        </div>
        <div className={styles.imageRow}>
          <div className={styles.wrapper}>
            <img src={certImage7} alt="cert7" />
          </div>
          <div className={styles.wrapper}>
            <img src={certImage8} alt="cert8" />
          </div>
        </div>
        <div className={styles.imageRow}>
          <div className={styles.wrapper}>
            <img src={certImage9} alt="cert9" />
          </div>
          <div className={styles.wrapper}>
            <img src={certImage10} alt="cert10" />
          </div>
        </div>
        <div className={styles.imageRow}>
          <div className={styles.wrapper}>
            <img src={certImage11} alt="cert11" />
          </div>
          <div className={styles.wrapper}>
            <img src={certImage12} alt="cert12" />
          </div>
        </div>
      </div>
    </div>
  );
}
