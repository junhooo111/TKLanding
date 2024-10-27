import { TitleComponent } from "../common/components/TitleComponent";
import styles from "./style.module.scss";

export function OtherFacility() {
  return (
    <div className={styles.component}>
      <TitleComponent
        label="기타설비"
        sub="제습기 / VOC / 공조기 제작 및 설치 / 해외공사"
      />
      <div className={styles.temp} />
    </div>
  );
}
