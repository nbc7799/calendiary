import React from "react";
import styles from "./successSignup.module.css";

const SuccessSignup = (props) => {
  return (
    <div className={styles.display}>
      <div className={styles.signBox}>
        <div className={styles.title}>Sign Up</div>
        <div className={styles.circle}>
          <div className={styles.innerCircle}></div>
        </div>
        <p>
          가입이 성공적으로
          <br /> 완료됐습니다.
        </p>
      </div>
    </div>
  );
};

export default SuccessSignup;
