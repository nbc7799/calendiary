import React from "react";
import ViewSelect from "../viewSelect/ViewSelect";
import styles from "./header.module.css";

const Header = ({ setMonth, setYear, month, year, date, goToday }) => {
  const lastMonth = () => {
    if (month <= 1) {
      month = 12;
      setMonth(month);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };
  const nextMonth = () => {
    if (month >= 12) {
      month = 1;
      setMonth(month);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.logoBox}>
        <span>Calendiary</span>
      </div>
      <div className={styles.yearMonth}>
        <div className={styles.button}>
          <button onClick={lastMonth}>&lt;</button>
          <button onClick={goToday}>Today</button>
          <button onClick={nextMonth}>&gt;</button>
        </div>
        <div className={styles.now}>
          <div>{`${year}년 ${month}월`}</div>
        </div>
      </div>
      <ViewSelect />
    </div>
  );
};

export default Header;
