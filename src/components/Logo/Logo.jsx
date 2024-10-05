import logo from "../../../public/img/wf_logo.png";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="WinnerFlags Logo" />
    </div>
  );
}

export default Logo;
