import React from "react";
import styles from "./successSignup.module.css";

const SuccessSignup = (props) => {
  return (
    <div className={styles.display}>
      <div className={styles.signBox}>
        <div className={styles.title}>Sign Up</div>
        <h2 data-text="PRESENT...">PRESENT...</h2>
        <p>잠시만 기다려주세요..</p>
      </div>
    </div>
  );
};

export default SuccessSignup;
