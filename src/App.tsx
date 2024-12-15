import { Link, Route, Routes } from "react-router-dom";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { NavBar } from "./NavBar";
import { isMenuOpened } from "./states/main";
import styles from "./style.module.scss";
import { useRecoilState } from "recoil";
import { Intro } from "./Intro";
import { History } from "./History";
import { Location } from "./Location";
import { AirConditioner } from "./AirConditioner";
import { ConstantFacility } from "./ConstantFacility";
import { CleanRoom } from "./CleanRoom";
import { OtherFacility } from "./OtherFacility";
import { useEffect, useState } from "react";
import { Certification } from "./Certification";

const companyInfoMenu = {
  title: "회사소개",
  items: [
    { name: "인사말", path: "/intro" },
    { name: "연혁", path: "/history" },
    { name: "특허 및 인증서", path: "/certification" },
    { name: "오시는 길", path: "/location" },
  ],
};

const businessAreasMenu = {
  title: "제품소개",
  items: [
    { name: "공기조화기", path: "/air-conditioner" },
    { name: "항온항습기", path: "/constant-temperature-and-humidity" },
    { name: "크린룸설비", path: "/clean-room" },
    { name: "기타설비", path: "/other-facilities" },
  ],
};

function App() {
  const [isOpened, setIsOpened] = useRecoilState(isMenuOpened);
  const [vh, setVh] = useState(window.innerHeight);

  // 동적 vh 계산
  useEffect(() => {
    const handleResize = () => {
      setVh(window.innerHeight); // 현재 화면 높이 갱신
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpened(false);
  };

  return (
    <div
      className={styles.component}
      style={{
        height: `${vh}px`,
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/history" element={<History />} />
        <Route path="/location" element={<Location />} />
        <Route path="/air-conditioner" element={<AirConditioner />} />
        <Route
          path="/constant-temperature-and-humidity"
          element={<ConstantFacility />}
        />
        <Route path="/clean-room" element={<CleanRoom />} />
        <Route path="/other-facilities" element={<OtherFacility />} />
        <Route path="/certification" element={<Certification />} />
      </Routes>
      <div className={`${styles.overlay} ${isOpened ? styles.open : ""}`}>
        <div className={styles.menuWrapper}>
          <div className={styles.menuContents}>
            <h2 className={styles.main}>{companyInfoMenu.title}</h2>
            <div className={styles.subLine} />
            {companyInfoMenu.items.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                className={styles.sub}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className={styles.menuContents}>
            <h2 className={styles.main}>{businessAreasMenu.title}</h2>
            <div className={styles.subLine} />
            {businessAreasMenu.items.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                className={styles.sub}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
