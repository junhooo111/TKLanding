import { TitleComponent } from "../common/components/TitleComponent";
import styles from "./style.module.scss";
import cleanRoomImage1 from "../images/clean-room1.png";
import cleanRoomImage2 from "../images/clean-room2.png";

export function CleanRoom() {
  return (
    <div className={styles.component}>
      <TitleComponent
        label="OAC(Outside Air Conditioner)"
        sub="Clean room 내부의 온도와 습도, Particle을 일정 수준으로 관리하기 위한 설비로 외부 공기를 최적의 수준으로 만들어 공급한다."
      />
      <img
        className={styles.firstImage}
        src={cleanRoomImage1}
        alt="cleanRoom1"
      />
      <img src={cleanRoomImage2} alt="cleanRoom2" />
    </div>
  );
}
