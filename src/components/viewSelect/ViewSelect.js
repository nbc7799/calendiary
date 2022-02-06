import React from "react";
import styles from "./ViewSelect.module.css";

const ViewSelect = () => {
  return (
    <select className={styles.pageMove} name="pageMove">
      <option value="일">일별</option>
      <option value="주">주별</option>
      <option value="월">월별</option>
      <option value="월">일기</option>
    </select>
  );
};

export default ViewSelect;
