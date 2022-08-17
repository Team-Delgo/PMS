import React from "react";
import "./Day.css";
import ReservationButton from "./ReservationButton";

function Day({ day, reservationData }) {
  return (
    <>
      <div className="day-background">
        <div className="day-number">{day}</div>
        <div className="case-number">({reservationData?.length}건)</div>
      </div>
      {
        reservationData?.map((place, i) =>
          <ReservationButton place={place} index={i} key={i} />
        )
      }
    </>
  );
}

export default Day;
