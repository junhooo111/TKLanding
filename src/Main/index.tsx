import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
// import mainImage1 from "../images/main-image1.jpg";
// import mainImage2 from "../images/main-image2.jpg";
// import mainImage3 from "../images/main-image3.jpg";
// import mainImage4 from "../images/main-image4.jpg";
// import mainImage5 from "../images/main-image5.jpg";
// import mainImage1 from "../images/main.jpg"
import mainNewImage1 from "../images/main-new1.jpg"
import mainNewImage2 from "../images/main-new2.jpg"

const images = [mainNewImage1, mainNewImage2];

export function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fadeToNext();
  //   }, 3000); // 3초 간격

  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  const fadeToNext = () => {
    if (isFading) return; // 애니메이션 진행 중일 경우 함수 종료
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
      setIsFading(false);
    }, 500); // 애니메이션 시간
  };

  const handleDotClick = (index: number) => {
    if (isFading) {
      setCurrentIndex(index); // 도트 클릭 시 바로 이미지 변경
      setIsFading(false); // 기존 애니메이션 중단
    } else {
      setIsFading(true); // 새로 애니메이션 시작
      setTimeout(() => {
        setCurrentIndex(index);
        setIsFading(false);
      }, 500); // 애니메이션 시간
    }
  };

  return (
    <div className={styles.component}>
      <div
        className={`${styles.slider} ${
          isFading ? styles.fadeOut : styles.fadeIn
        }`}
      >
        <img src={images[currentIndex]} alt={`main${currentIndex + 1}`} />
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
