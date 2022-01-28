import React, { useEffect, useState } from "react";
import Body from "../body/body";
import Header from "../header/header";

const Main = (props) => {
  let date = new Date();
  const viewMonth = date.getMonth();
  const viewYear = date.getFullYear();

  const [month, setMonth] = useState(viewMonth + 1);
  const [year, setYear] = useState(viewYear);
  const [totalDates, setTotalDates] = useState([]);

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

  useEffect(() => {
    setTotalDates(makeDates());
  }, []);

  useEffect(() => {
    setTotalDates(makeDates(month));
  }, [month]);

  return (
    <>
      <Header
        makeDates={makeDates}
        setMonth={setMonth}
        month={month}
        year={year}
        setYear={setYear}
        date={date}
      />
      <Body totalDates={totalDates} />
    </>
  );
};

export default Main;
