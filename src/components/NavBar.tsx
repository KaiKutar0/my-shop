import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.scss";
import Logo from "./Logo";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <Logo />

      <div className={styles.textPrimary}>
        <p>My WebSite</p>
      </div>

      <div className={styles.tabs}>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/contacts">
          <p>Contacts</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
