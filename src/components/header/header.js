import React from "react";
import styles from "./header.module.css";

const Header = ({ month, year, makeDates }) => {
  const lastMonth = () => {
    makeDates(month - 1);
    console.log(month);
  };
  const preMonth = () => {
    // setMonth(month + 1);
    console.log(month + 1);
  };

  const today = () => {
    console.log("today");
  };
  return (
    <div className={styles.header}>
      <div className={styles.logoBox}>
        <span>Calendiary</span>
      </div>
      <div className={styles.yearMonth}>
        <div className={styles.button}>
          <button onClick={lastMonth}>&lt;</button>
          <button onClick={today}>Today</button>
          <button onClick={preMonth}>&gt;</button>
        </div>
        <div className={styles.now}>
          <div>{`${year}년 ${month}월`}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
