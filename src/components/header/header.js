import React from "react";
import styles from "./header.module.css";

const Header = ({ setMonth, setYear, month, year, date }) => {
  const lastMonth = () => {
    setMonth(month - 1);
  };
  const preMonth = () => {
    setMonth(month + 1);
  };

  const today = () => {
    const date = new Date();
    const nowMonth = date.getMonth() + 1;
    const nowDate = date.getDate();
    if (nowDate === month && nowMonth === date) {
      setMonth(nowMonth);
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
          <button onClick={today}>Today</button>
          <button onClick={preMonth}>&gt;</button>
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
