import clsx from "clsx";
import { TitleComponent } from "../common/components/TitleComponent";
import styles from "./style.module.scss";

export function Location() {
  return (
    <div className={styles.component}>
      <TitleComponent label="오시는 길" />
      <div className={styles.contents}>
        <div className={styles.temp} />
        <div className={styles.atom}>
          <h2>{`주소`}</h2>
          <p>{`(우) 18559, 경기도 화성시 우정읍 매바위로 165번길 70-47 (주곡리)`}</p>
        </div>
        <div className={clsx(styles.atom, styles.bottom)}>
          <h2>{`전화 · 팩스`}</h2>
          <p>{`TEL. 070-8671-4120  /  FAX. 070-7589-3010`}</p>
        </div>
      </div>
    </div>
  );
}
