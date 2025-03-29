import styles from "./style.module.scss"
import airConditioner1 from "../../images/air-conditioner1.png";
import airConditioner3 from "../../images/air-conditioner3.png";

export function AHU () {
    return (
        <div className={styles.component}>
            <div className={styles.contents}>
                <div className={styles.bg} />
                <div className={styles.title}>
                    <p className={styles.pTitle}>AHU</p>
                    <p className={styles.pDesc}>( Air Handling Unit )</p>
                </div>
                <div className={styles.desc}>
                    <p>{`Clean Room 내부 공기의 분배, 압력, 냉난방 및 습도조정 등`}</p>
                    <p>{`실내 필요 조건을 조성하는 기능을 가진 공조 설비로`}</p>
                    <p>{`실내에 최적의 환경을 만든다.`}</p>
                </div>
                <div className={styles.mobileDesc}>
                    <p>{`Clean Room 내부 공기의 분배, 압력, 냉난방 및 습도조정 등 실내 필요 조건을 조성하는 기능을 가진 공조 설비로 실내에 최적의 환경을 만든다.`}</p>
                </div>
            </div>
            <img className={styles.secondImage} src={airConditioner3} alt={`airConditioner3`} />
            <img className={styles.firstImage} src={airConditioner1} alt={`airConditioner1`} />
        </div>
    )
}