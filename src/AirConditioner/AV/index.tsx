import styles from "./style.module.scss"

export function AV () {
    return (
        <div className={styles.component}>
            <div className={styles.contents}>
                <div className={styles.bg} />
                <div className={styles.title}>
                    <p className={styles.pTitle}>AV 공조기</p>
                    <p className={styles.pDesc}>( Air Volume )</p>
                </div>
                <div className={styles.desc}>
                    <p>{`공기량 조절에 중점을 둔 냉방기로,`}</p>
                    <p>{`특정 용도에 따라 공기량이나 공기흐름을 조정하며,`}</p>
                    <p>{`주로 산업현장, 상업공간, 또는 연구실처럼`}</p>
                    <p>{`정밀한 공기흐름 관리가 필요한 곳에 사용된다.`}</p>
                </div>
                <div className={styles.mobileDesc}>
                    <p>{`공기량 조절에 중점을 둔 냉방기로, 특정 용도에 따라 공기량이나 공기흐름을 조정하며, 주로 산업현장, 상업공간, 또는 연구실처럼 정밀한 공기흐름 관리가 필요한 곳에 사용된다.`}</p>
                </div>
            </div>
            {/* <img src={airConditioner2} alt={`airConditioner`} /> */}
        </div>
    )
}