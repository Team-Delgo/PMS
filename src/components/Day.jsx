import React from "react";
import "./Day.css";
function Day({ openModal, day, reservationNumber }) {
  function reservationButtons() {
    const reservationButtonArray = [];
    for (let i = 0; i < reservationNumber; i += 1) {
      reservationButtonArray.push(<button className="reservation-button" onClick={openModal}>{i+1}.숙소명 김서은</button>);
    }
    return reservationButtonArray;
  }

  return (
    <>
      <div style={{ display: "flex",textAlign:"center" }}>
        <div className="day-number">{day}</div>
        <div className="case-number">({reservationNumber}건)</div>
      </div>
      <div style={{ marginBottom:"30px" }}>{reservationButtons()}</div>
    </>
  );
}

export default Day;
