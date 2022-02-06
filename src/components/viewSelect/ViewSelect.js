import React from "react";
import styled from "styled-components";

const ViewSelect = () => {
  return (
    <Select>
      <option value="일">일별</option>
      <option value="주">주별</option>
      <option value="월">월별</option>
      <option value="월">일기</option>
    </Select>
  );
};

export default ViewSelect;

const Select = styled.select`
  height: 30px;
  margin-right: 20px;
  margin-top: 10px;
  border-radius: 4px;
  font-size: 12px;
  padding: 0 4px;
`;
