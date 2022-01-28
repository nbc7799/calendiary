import React from "react";
import styles from "./body.module.css";
import Date from "../date/date";

const Body = ({ totalDates }) => (
  <div>
    <div className={styles.body}>
      <div className={styles.days}>
        <div className={styles.day}>일</div>
        <div className={styles.day}>월</div>
        <div className={styles.day}>화</div>
        <div className={styles.day}>수</div>
        <div className={styles.day}>목</div>
        <div className={styles.day}>금</div>
        <div className={styles.day}>토</div>
      </div>
      <div className={styles.dates}>
        {totalDates.map((date, i) => {
          return <Date date={date} key={i} />;
        })}
      </div>
    </div>
  </div>
);

export default Body;
