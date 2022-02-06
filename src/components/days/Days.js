import React from "react";
import styles from "./Days.module.css";

const Days = () => {
  return (
    <div className={styles.days}>
      <div className={styles.day}>일</div>
      <div className={styles.day}>월</div>
      <div className={styles.day}>화</div>
      <div className={styles.day}>수</div>
      <div className={styles.day}>목</div>
      <div className={styles.day}>금</div>
      <div className={styles.day}>토</div>
    </div>
  );
};

export default Days;
