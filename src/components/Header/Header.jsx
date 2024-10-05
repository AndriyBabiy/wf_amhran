import clsx from "clsx";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import SwitchTheme from "../SwitchTheme/SwitchTheme";

function Header() {
  return (
    // <div className={`${styles.headerSection} ${styles.headerContainer}`}>
    <div className={clsx(styles.headerContainer, styles.headerSection)}>
      <Logo />
      <SwitchTheme />
    </div>
  );
}

export default Header;
