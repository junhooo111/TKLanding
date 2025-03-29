import { TitleComponent } from "../common/components/TitleComponent";
import styles from "./style.module.scss";
import constantImage1 from "../images/constant1.png";
import constantImage2 from "../images/constant2.png";

export function ConstantFacility() {
  return (
    <div className={styles.component}>
      <TitleComponent
        label="항온항습기"
        sub="특정 환경에서 설정된 온도와 습도를 일정하게 유지하는 설비로 온도제어, 습도제어, 공기순환, 제습 및 가습 등을 정밀하게 제어할 수 있다."
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
