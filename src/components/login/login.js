import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";

const Login = () => {
  const [checkId, setCheckId] = useState("1234");
  const [checkPass, setCheckPass] = useState("1234");
  const [hidePassword, setHidePassword] = useState(true);
  const [loginFail, setLoginFail] = useState(false);
  const idRef = useRef();
  const passRef = useRef();
  //ref사용하면 돔을 직접건드리는것
  const showError = () => {
    console.log("아이디나 비밀번호가 틀립니다");
  };

  const clickLogin = () => {
    const passValue = passRef.current.value;
    const idValue = idRef.current.value;

    if (checkId === idValue && checkPass === passValue) {
      setLoginFail(false);
      console.log(loginFail);
      console.log("서버데이터요청");
      setCheckId("1234");
      setCheckPass("1234");
    } else if (!(checkId === idValue) || !(checkPass === passValue)) {
      setCheckId("1234");
      setCheckPass("1234");
      setLoginFail(true);

      console.log(loginFail);
      showError();
    }
    return loginFail;
  };

  const hideClick = () => {
    if (hidePassword) {
      setHidePassword(false);
    } else if (!hidePassword) {
      setHidePassword(true);
    }
  };
  return (
    <div className={styles.display}>
      <div className={`${styles.loginBox} ${loginFail ? styles.error : null}`}>
        <div className={styles.title}>Login</div>
        <div className={styles.inputBox}>
          <div className={styles.idBox}>
            <input ref={idRef} type="text" placeholder="email@gmail.com" />
          </div>
          <div className={styles.passBox}>
            <input
              ref={passRef}
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
        {loginFail && (
          <span className={styles.errorMessage}>
            아이디 또는 비밀번호가 잘못 입력 되었습니다. <br />
            아이디와 비밀번호를 정확히 입력해 주세요.
          </span>
        )}
        <button type="button" className={styles.login} onClick={clickLogin}>
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
          <Link to="/signup">
            <p className={styles.create}>create</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
