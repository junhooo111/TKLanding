import { Footer } from "./Footer";
import { Main } from "./Main";
import { NavBar } from "./NavBar";
import styles from "./style.module.scss";

function App() {
  return (
    <div className={styles.component}>
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
