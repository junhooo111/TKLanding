import { TitleComponent } from "../common/components/TitleComponent";
import styles from "./style.module.scss";

export function Intro() {
  return (
    <div className={styles.component}>
      <TitleComponent label="인사말" />
      <h2
        className={styles.title}
      >{`"최고의 공조 기술로 쾌적한 환경을 제공하는 기업입니다."`}</h2>
      <div className={styles.contents}>
        <div className={styles.temp} />
        <div className={styles.detail}>
          <p>
            {`대경공조(주)는 혁신적인 공조기 솔루션을 제공하는 제조업체입니다. \n당사는 다양한 산업과 상업 공간에 맞춘 공조 시스템을 설계 및 제작하며, 에너지 효율성과 성능을 최우선으로 생각합니다. \n\n고객의 요구에 맞춘 맞춤형 솔루션과 첨단 기술을 접목한 제품으로 쾌적하고 건강한 실내 환경을 제공하며, 지속 가능한 미래를 함께 만들어갑니다. \n\n대경공조(주)는 철저한 품질 관리와 신속한 서비스로 고객 만족을 최우선으로 하며, 공조기 시장에서 신뢰받는 파트너로 자리매김하고 있습니다.`}
          </p>
        </div>
      </div>
    </div>
  );
}
