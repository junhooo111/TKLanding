import styles from "./style.module.scss";

interface SubMenuTooltipProps {
  itemName: string;
  position: { left: number; top: number };
  onClose: () => void;
}

export function SubMenuTooltip({ itemName, position, onClose }: SubMenuTooltipProps) {
  // 모바일 환경인지 확인 (예: 1000px 이하일 경우 모바일로 간주)
  const isMobile = window.innerWidth <= 1000;

  if (itemName === "공기조화기") {
    const airList = ["AHU", "AHU2", "AHU3"];

    return (
      <div
        className={styles.component}
        style={{
          position: "absolute",
          left: `${position.left + (isMobile ? 80 : 0)}px`, // 모바일일 경우 left - 50px 적용
          top: `${position.top - (isMobile ? 18 : 35)}px`,
        }}
        onMouseLeave={onClose}
      >
        <div className={styles.itemList}>
          {itemName === "공기조화기" &&
            airList.map((item) => <div className={styles.item}>{item}</div>)}
        </div>
        <div className={styles.horizontalLine} />
        <div className={styles.horizontalLine2} />
        <div className={styles.horizontalLine3} />
        <div className={styles.verticalLine} />
      </div>
    );
  }

  return <></>;
}
