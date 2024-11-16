import { TitleComponent } from "../common/components/TitleComponent";
import styles from "./style.module.scss";
import otherImage1 from "../images/other1.png";
import otherImage2 from "../images/other2.png";
import otherImage3 from "../images/other3.png";
import otherImage4 from "../images/other4.png";
import otherImage5 from "../images/other5.png";
import otherImage6 from "../images/other6.png";

export function OtherFacility() {
  return (
    <div className={styles.component}>
      <TitleComponent
        label="기타설비"
        sub="제습기 / VOC / 공조기 제작 및 설치 / 해외공사"
      />
      <div className={styles.imageWrapper}>
        <div className={styles.top}>
          <img src={otherImage1} alt="other1" />
          <img src={otherImage2} alt="other2" />
          <img src={otherImage3} alt="other3" />
        </div>
        <div className={styles.bottom}>
          <img src={otherImage4} alt="other4" />
          <img src={otherImage5} alt="other5" />
          <img src={otherImage6} alt="other6" />
        </div>
      </div>
    </div>
  );
}
