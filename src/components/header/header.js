import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <div className={styles.logoBox}>
      <div className={styles.title}>Calendiary</div>
    </div>
  );
};

export default Header;
