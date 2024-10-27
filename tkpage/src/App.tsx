import { Footer } from "./Footer";
import { Main } from "./Main";
import { NavBar } from "./NavBar";
import { isMenuOpened } from "./states/main";
import styles from "./style.module.scss";
import { useRecoilValue } from "recoil";

const companyInfoMenu = {
  title: "회사소개",
  items: ["인사말", "연혁", "오시는 길"],
};

const businessAreasMenu = {
  title: "사업분야",
  items: ["공기조화기", "항온항습기", "크린룸설비", "기타설비"],
};

function App() {
  const isOpened = useRecoilValue(isMenuOpened);

  return (
    <div className={styles.component}>
      <NavBar />
      <Main />
      <div className={`${styles.overlay} ${isOpened ? styles.open : ""}`}>
        <div className={styles.menuWrapper}>
          <div className={styles.menuContents}>
            <h2 className={styles.main}>{companyInfoMenu.title}</h2>
            <div className={styles.subLine} />
            {companyInfoMenu.items.map((item) => (
              <h2 key={item} className={styles.sub}>
                {item}
              </h2>
            ))}
          </div>
          <div className={styles.menuContents}>
            <h2 className={styles.main}>{businessAreasMenu.title}</h2>
            <div className={styles.subLine} />
            {businessAreasMenu.items.map((item) => (
              <h2 key={item} className={styles.sub}>
                {item}
              </h2>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
