import { TitleComponent } from "../common/components/TitleComponent";
import styles from "./style.module.scss";
import historyImage from "../images/history.webp";

export function History() {
  return (
    <div className={styles.component}>
      <TitleComponent label="연혁" />
      <img src={historyImage} alt="history" />
    </div>
  );
}
