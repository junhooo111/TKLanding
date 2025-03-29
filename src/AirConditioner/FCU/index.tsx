import styles from "./style.module.scss"

export function FCU () {
    return (
        <div className={styles.component}>
            <div className={styles.contents}>
                <div className={styles.bg} />
                <div className={styles.title}>
                    <p className={styles.pTitle}>FCU</p>
                    <p className={styles.pDesc}>( Fan Coil Unit )</p>
                </div>
                <div className={styles.desc}>
                    <p>{`건물의 냉난방과 환기를 담당하는 공조설비로`}</p>
                    <p>{`설치가 용이하고 개별 제어가 가능하여`}</p>
                    <p>{`불필요한 공간에서는 작동을 멈출 수 있어`}</p>
                    <p>{`에너지 절감이 가능하다.`}</p>
                </div>
                <div className={styles.mobileDesc}>
                    <p>{`건물의 냉난방과 환기를 담당하는 공조설비로 설치가 용이하고 개별 제어가 가능하여 불필요한 공간에서는 작동을 멈출 수 있어 에너지 절감이 가능하다.`}</p>
                </div>
            </div>
            {/* <img src={airConditioner2} alt={`airConditioner`} /> */}
        </div>
    )
}