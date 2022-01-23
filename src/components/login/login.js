import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <h1 className={styles.display}>
      <div className={styles.loginBox}>
        <div className={styles.title}>Login</div>
        <div className={styles.input}>
          <input type="text" placeholder="Email adress" />
          <input type="text" placeholder="password" />
        </div>
        <div className={styles.check}>
          <input type="checkbox"></input>
          <p>forgot password?</p>
        </div>
        <button className={styles.login}>LOGIN</button>
        <div className={styles.goSignup}>
          <p>Don't have an account?</p>
          <p>Create</p>
        </div>
      </div>
    </h1>
  );
};

export default Login;
