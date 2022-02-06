import React from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.display}>
      <div className={styles.signBox}>
        <div className={styles.title}>Sign Up</div>
        <div className={styles.inputContainer}>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Email adress" />
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder="password" />
            <button className={styles.look} type="button">
              <i class="far fa-eye"></i>
            </button>
            <button className={styles.hiden}>
              <i class="far fa-eye-slash"></i>
            </button>
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder="password" />
            <button className={styles.look} type="button">
              <i class="far fa-eye"></i>
            </button>
            <button className={styles.hiden}>
              <i class="far fa-eye-slash"></i>
            </button>
          </div>
        </div>
        <p className={styles.error}>
          *비밀번호는 문자 + 숫자 + 특수문자를 모두 포함한 8글자 이상이어야
          합니다.
        </p>
        <button type="button" className={styles.createAccount}>
          Create Account
        </button>
        <div className={styles.or}>
          <div className={styles.line}></div>
          <span>or sign up with</span>
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
        <div className={styles.goLogin}>
          <p>Already have an account? </p>
          <Link to="/login">
            <p className={styles.create}>Log in</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
