import React from "react";
import styles from "./body.module.css";
import Date from "../date/date";
import Days from "../days/Days";

const Body = ({ totalDates }) => (
  <div className={styles.body}>
    <Days />
    <div className={styles.dates}>
      {totalDates.map((date, i) => {
        return <Date date={date} key={i} />;
      })}
    </div>
  </div>
);

export default Body;
