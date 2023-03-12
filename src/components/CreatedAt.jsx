import React from "react";

const MINUTE = 1000 * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = WEEK * 4;
const YEAR = MONTH * 12;

const renderTimeDiff = (millisecond, timeUnit, text) => {
  const diffTime = Math.floor(millisecond / timeUnit);
  const formattedText = diffTime <= 1 ? `${text}` : `${text}s`;

  return (
    <span>
      {diffTime} {formattedText}
    </span>
  );
};

const CreatedAt = ({ createdAt }) => {
  const now = new Date(); // 현재 시간
  const createdTime = new Date(createdAt); // 저장된 시간
  const diffMs = now.getTime() - createdTime.getTime(); // 시간 차이 (밀리초)

  if (diffMs < HOUR) {
    // Minute
    return renderTimeDiff(diffMs, MINUTE, "minute");
  } else if (diffMs < DAY) {
    // Hour
    return renderTimeDiff(diffMs, HOUR, "hour");
  } else if (diffMs < DAY * 2) {
    // Yesterday
    return <span>Yesterday</span>;
  } else if (diffMs < WEEK) {
    // Day
    return renderTimeDiff(diffMs, DAY, "day");
  } else if (diffMs < MONTH) {
    // Week
    return renderTimeDiff(diffMs, WEEK, "week");
  } else if (diffMs < YEAR) {
    // Month
    return renderTimeDiff(diffMs, MONTH, "month");
  } else {
    // Year
    return renderTimeDiff(diffMs, YEAR, "year");
  }
};

export default CreatedAt;
