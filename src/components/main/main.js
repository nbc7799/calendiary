import React, { useEffect, useState } from "react";
import Body from "../body/body";
import Header from "../header/header";
import styles from "./main.module.css";

const Main = (props) => {
  let date = new Date();
  const viewMonth = date.getMonth();
  const viewYear = date.getFullYear();

  const [month, setMonth] = useState(viewMonth + 1);
  const [year, setYear] = useState(viewYear);
  const [totalDates, setTotalDates] = useState([]);

  //날짜 그려내는 함수
  const makeDates = () => {
    const lastDate = new Date(year, month - 1, 0).getDate();
    const lastDay = new Date(year, month - 1, 0).getDay();

    const thisDate = new Date(year, month, 0).getDate();
    const thisDay = new Date(year, month, 0).getDay();

    const lastDates = [];
    const thisDates = [...Array(thisDate + 1).keys()].slice(1);
    const nextDates = [];

    //지난달 날짜그려내기
    if (lastDay !== 6) {
      for (let i = 0; i < lastDay + 1; i++) {
        lastDates.unshift(lastDate - i);
      }
    }

    //다음달 날짜 그려내기
    for (let i = 1; i < 7 - thisDay; i++) {
      nextDates.push(i);
    }

    // dates 합치기
    return lastDates.concat(thisDates, nextDates);
  };

  const goToday = () => {
    const nowYear = date.getFullYear();
    const nowMonth = date.getMonth() + 1;
    setMonth(nowMonth);
    setYear(nowYear);
  };

  // 리렌더발생시 totalDates에 새로운 달 날짜그려서 배열에 담고
  useEffect(() => {
    setTotalDates(makeDates(month));
  }, [month]);

  return (
    <div className={styles.main}>
      <Header
        makeDates={makeDates}
        setMonth={setMonth}
        month={month}
        year={year}
        setYear={setYear}
        date={date}
        goToday={goToday}
      />
      <Body totalDates={totalDates} />
    </div>
  );
};

export default Main;
