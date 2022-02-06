import React from "react";
import styles from "./header.module.css";

const Header = ({ setMonth, setYear, month, year, date, goToday }) => {
  let thisDate = new Date();

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
      <select className={styles.pageMove} name="pageMove">
        <option value="일">일별</option>
        <option value="주">주별</option>
        <option value="월">월별</option>
        <option value="월">일기</option>
      </select>
    </div>
  );
};

export default Header;
