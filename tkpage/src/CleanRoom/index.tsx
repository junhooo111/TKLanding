import { TitleComponent } from "../common/components/TitleComponent";
import styles from "./style.module.scss";
import mainImage from "../images/clean-room.webp";

export function CleanRoom() {
  return (
    <div className={styles.component}>
      <TitleComponent label="Clean Room 설비_외조기(OAC)" />
      <img src={mainImage} alt="mainImage" />
    </div>
  );
}
