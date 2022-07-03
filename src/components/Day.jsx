import React , {useState,useEffect} from "react";
import Modal from "react-modal";
import "./Day.css";
import ReservationButton from "./ReservationButton";



function Day({ day, reservationData }) {

  useEffect(()=>{
    console.log(reservationData)
  },[])

  // function reservationButtons() {
  //   const reservationButtonArray = [];
  //   for (let i = 0; i < reservationNumber; i += 1) {
  //     reservationButtonArray.push(<button className="reservation-button" onClick={openModal}>{i+1}.숙소명 김서은</button>);
  //   }
  //   return reservationButtonArray;
  // }

  return (
    <>
      <div style={{ display: "flex",textAlign:"center" }}>
        <div className="day-number">{day}</div>
        <div className="case-number">({reservationData?.length}건)</div>
      </div>
      {
        reservationData?.map((place, i) => 
        <ReservationButton place={place} index={i} key={i}/>
        )
      }
    </>
  );
}

export default Day;
