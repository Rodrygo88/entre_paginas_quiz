import styles from "./Nav.module.css";
import logo from "../assets/logo.svg";

function Nav() {
  return (
    <nav className={styles.nav}>
      <h1>
        <img src={logo} alt="Logo Entre Páginas" className={styles.logo} />
      </h1>
    </nav>
  );
}

export default Nav;
