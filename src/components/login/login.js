import React, { useState } from "react";
import styles from "./login.module.css";

const Login = () => {
  let [hidePassword, setHidePassword] = useState(true);

  const hideClick = (e) => {
    if (hidePassword) {
      setHidePassword(false);
      console.log(e);
    } else if (!hidePassword) {
      setHidePassword(true);
      console.log(e);
    }
  };

  return (
    <div className={styles.display}>
      <div className={styles.loginBox}>
        <div className={styles.title}>Login</div>
        <div className={styles.inputBox}>
          <div className={styles.idBox}>
            <input type="text" placeholder="email@gmail.com" />
          </div>
          <div className={styles.passBox}>
            <input
              type={hidePassword ? "password" : "text"}
              placeholder="password"
            />
            {hidePassword ? (
              <button className={styles.hide} type="button" onClick={hideClick}>
                <i class="far fa-eye-slash"></i>
              </button>
            ) : (
              <button className={styles.look} type="button" onClick={hideClick}>
                <i class="far fa-eye"></i>
              </button>
            )}
          </div>
        </div>
        <div className={styles.check}>
          <div className={styles.remember}>
            <input type="checkbox" />
            <p>remember me</p>
          </div>
          <button className={styles.forgotPass} type="button">
            <p>forgot password?</p>
          </button>
        </div>
        <button type="button" className={styles.login}>
          LOGIN
        </button>
        <div className={styles.or}>
          <div className={styles.line}></div>
          <span>or</span>
          <div className={styles.line}></div>
        </div>
        <div className={styles.logos}>
          <button>
            <img src="images/google.png" alt="" />
          </button>
          <button>
            <img src="images/naver.png" alt="" />
          </button>
        </div>
        <div className={styles.goSignup}>
          <p>Don't have an account? </p>
          <input className={styles.create} type="button" value="Create" />
        </div>
      </div>
    </div>
  );
};

export default Login;
