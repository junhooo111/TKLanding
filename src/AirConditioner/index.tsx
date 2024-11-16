import { TitleComponent } from "../common/components/TitleComponent";
import styles from "./style.module.scss";
import airConditioner1 from "../images/air-conditioner1.png";
import airConditioner2 from "../images/air-conditioner2.png";
import airConditioner3 from "../images/air-conditioner3.png";

export function AirConditioner() {
  return (
    <div className={styles.component}>
      <TitleComponent
        label="공기조화기(AHU)"
        sub="ROOM 내부에 공기의 분배, 압력, 냉난방 및 습도 조정 등 기실 내에서 필요한 조건을 위하여 공조기를 조정하는 기능을 가진 공조설비로 실에 맞는 쾌적한 환경을 만든다."
      />
      <div className={styles.topImages}>
        <img
          className={styles.firstImage}
          src={airConditioner2}
          alt="air-conditioner2"
        />
        <img
          className={styles.secondImage}
          src={airConditioner3}
          alt="air-conditioner3"
        />
      </div>
      <div className={styles.bottomImages}>
        <img
          className={styles.thirdImage}
          src={airConditioner1}
          alt="air-conditioner1"
        />
      </div>
    </div>
  );
}
