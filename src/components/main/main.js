import React, { useState } from "react";
import styles from "./main.module.css";

const Main = (props) => {
  let DATE = new Date();
  const MONTH = DATE.getMonth() + 1;
  const YEAR = DATE.getFullYear();
  const date = DATE.getDate();
  const day = DATE.getDay();

  const [month, setMonth] = useState(MONTH);
  const [yaer, setYear] = useState(YEAR);

  const lastMonth = () => {
    setMonth(month - 1);
    console.log(month);
  };
  const preMonth = () => {
    setMonth(month + 1);
    console.log(month);
  };

  return (
    <div className={styles.header}>
      <div>
        <button onClick={lastMonth}>&lt;</button>
        <button onClick={preMonth}>&gt;</button>
      </div>
      <div className={styles.now}>
        <div>{`${yaer}년`}</div>
        <div>{`${month}월`}</div>
      </div>
    </div>
  );
};

export default Main;
