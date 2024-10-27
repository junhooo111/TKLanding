import styles from "./style.module.scss";
import logoImage from "../images/logo.webp";
import titleImage from "../images/title.webp";
import titleOpenImage from "../images/title-open.webp";
import menuIcon from "../icons/menu.webp";
import menuOpenIcon from "../icons/menu-open.webp";
import { useRecoilState } from "recoil";
import { isMenuOpened } from "../states/main";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";

export function NavBar() {
  const [isOpened, setIsOpened] = useRecoilState(isMenuOpened);
  const navigate = useNavigate();
  const location = useLocation();

  const isNotHome = location.pathname !== "/";

  console.log(isNotHome);

  return (
    <div
      className={clsx(
        styles.component,
        (isOpened || isNotHome) && styles.opened
      )}
    >
      <button
        className={styles.menuButton}
        onClick={() => setIsOpened(!isOpened)}
      >
        <img src={isOpened || isNotHome ? menuOpenIcon : menuIcon} alt="menu" />
      </button>
      <button
        className={clsx(
          styles.homeButton,
          (isOpened || isNotHome) && styles.opened
        )}
        onClick={() => {
          setIsOpened(false);
          navigate("/");
        }}
      >
        <img src={logoImage} alt="logo" />
        <img
          className={styles.title}
          src={isOpened || isNotHome ? titleOpenImage : titleImage}
          alt="title"
        />
        <h2 className={styles.sub}>{`|주|`}</h2>
      </button>
    </div>
  );
}
