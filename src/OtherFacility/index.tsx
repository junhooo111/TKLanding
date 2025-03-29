import clsx from "clsx";
import styles from "./style.module.scss";

const subMenuList = [
  "기타설비",
];

export function OtherFacility() {
  return (
    <div className={styles.component}>
      <div className={styles.subMenu}>
        {subMenuList.map((menu) => {
          return (
            <button
              className={styles.activeMenu}
            >{menu}</button>
          );
        })}
      </div>
      <div className={styles.routeWrapper}>
        <p>{`HOME`}</p>
        <p>{`>`}</p>
        <p className={styles.bold}>{`기타설비`}</p>
      </div>
      <div className={styles.contents}>
        <div className={clsx(styles.box, styles.border)}>
          <p>{`HEPA/ULPA 필터`}</p>
        </div>
        <div className={styles.box}>
          <p>{`패스박스/에어락`}</p>
        </div>
      </div>
    </div>
  );
}
