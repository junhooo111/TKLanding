import { TitleComponent } from "../common/components/TitleComponent";
import styles from "./style.module.scss";
import historyImage from "../images/history.png";
import historyTitle from "../images/historyTitle.png";

export function History() {
  return (
    <div className={styles.component}>
      <TitleComponent label="연혁" />
      <img className={styles.title} src={historyTitle} alt="historyTitle" />
      <img className={styles.historyImage} src={historyImage} alt="history" />
    </div>
  );
}
