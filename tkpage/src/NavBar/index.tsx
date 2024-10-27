import styles from "./style.module.scss";
import logoImage from "../images/logo.webp";
import titleImage from "../images/title.webp";
import menuIcon from "../icons/menu.webp";

export function NavBar() {
  return (
    <div className={styles.component}>
      <button className={styles.menuButton}>
        <img src={menuIcon} alt="menu" />
      </button>
      <button className={styles.homeButton}>
        <img src={logoImage} alt="logo" />
        <img className={styles.title} src={titleImage} alt="title" />
        <h2 className={styles.sub}>{`|주|`}</h2>
      </button>
    </div>
  );
}
