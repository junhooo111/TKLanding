import { TitleComponent } from "../common/components/TitleComponent";
import styles from "./style.module.scss";
import constantImage1 from "../images/constant1.png";
import constantImage2 from "../images/constant2.png";

export function ConstantFacility() {
  return (
    <div className={styles.component}>
      <TitleComponent
        label="항온항습기"
        sub="항온이란 일정온도라는 의미이고, 항습이란 일정습도라는 의미이다. 즉, 항온항습이란 ROOM이나 일정공간의 내부를 일정한 온도와 습도로 유지하는 것이다."
      />
      <div className={styles.imageWrapper}>
        <img
          className={styles.firstImage}
          src={constantImage1}
          alt="constant1"
        />
        <img
          className={styles.secondImage}
          src={constantImage2}
          alt="constant2"
        />
      </div>
    </div>
  );
}
