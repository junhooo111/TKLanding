import styles from "./style.module.scss";
import isoImage from "../images/iso-combine.png";
import jasImage from "../images/jas-anz.webp";
import ventureImage from "../images/venture.webp";

export function Footer() {
  // test
  return (
    <div className={styles.component}>
      <div className={styles.infoWrapper}>
        <p className={styles.title}>{`대경공조㈜`}</p>
        <p
          className={styles.detail}
        >{`대표이사: 김욱래 | 사업자등록번호: 581-88-01904 | 대표전화: 070-8671-4120 | FAX: 070-7589-3010`}</p>
        <p className={styles.detailMobileMain}>
          {`대표이사: 김욱래 | 사업자등록번호: 581-88-01904`}
        </p>
        <p className={styles.detailMobileSub}>
          {`대표전화: 070-8671-4120 | FAX: 070-7589-3010`}
        </p>
        <p
          className={styles.address}
        >{`주소: 경기도 화성시 우정읍 매바위로 165번길 70-47`}</p>
      </div>
      <div className={styles.markWrapper}>
        <img src={isoImage} alt="iso" />
        <img className={styles.jas} src={jasImage} alt="jas" />
        <img className={styles.venture} src={ventureImage} alt="venture" />
      </div>
      <p
        className={styles.copyright}
      >{`Copyrightⓒ 대경공조㈜  All rights reserved`}</p>
    </div>
  );
}
