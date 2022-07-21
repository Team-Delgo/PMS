import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from 'axios';
import './ReservationButton.css'

const customStyles = {
    content: {
        top: "50%",
        left: "82%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
        height: "100%",
        width: "400px",
    },
};


function ReservationButton({ place, index }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(place);
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const reservationConfirm = async () => {
    try {
      console.log(place.bookingId);
      const result = await axios.post(
        `http://49.50.161.156:8080/pms/booking/confirm/${place.bookingId}`
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        {place.bookingState === "F" ? (
          <button className="reservation-button-fix" onClick={openModal}>
            {index + 1}.{place.placeName} {place.userName}
          </button>
        ) : place.bookingState === "W" ? (
          <button className="reservation-button-wait" onClick={openModal}>
            {index + 1}.{place.placeName} {place.userName}
          </button>
        ) : place.bookingState === "CW" ? (
          <button
            className="reservation-button-cancle-wait"
            onClick={openModal}
          >
            {index + 1}.{place.placeName} {place.userName}
          </button>
        ) : place.bookingState === "CF" ? (
          <button className="reservation-button-cancle" onClick={openModal}>
            {index + 1}.{place.placeName} {place.userName}
          </button>
        ) : (
          <button className="reservation-button-comple" onClick={openModal}>
            {index + 1}.{place.placeName} {place.userName}
          </button>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ paddingTop: "10px" }}>예약정보</h1>
          <div
            onClick={closeModal}
            style={{ cursor: "pointer", padding: "40px 10px 0 0" }}
          >
            <img
              className="exit"
              src={`${process.env.PUBLIC_URL}/assets/images/exit.png`}
              alt="detail"
            />
          </div>
        </div>
        <div className="booker">{place.reservedName}</div>
        <div className="phone">{place.userPhoneNo}</div>
        <div className="place-name">{place.placeName}</div>
        <div className="place-name">{place.roomName}</div>
        <div className="start-date">
          <div>입실일</div> <div>{place.startDt}</div>
        </div>
        <div className="end-date">
          <div>퇴실일</div>
          <div>{place.endDt}</div>
        </div>
        <div className="etc">기타</div>
        <div className="reservation-button-container">
          {place.bookingState === "F" ? (
            <button className="reservation-cancle-button-fix">예약취소</button>
          ) : place.bookingState === "W" ? (
            <>
              <button className="reservation-cancle-button">예약취소</button>
              <button
                className="reservation-confirmation-button"
                onClick={reservationConfirm}
              >
                예약확정
              </button>
            </>
          ) : place.bookingState === "CW" ? (
            <button className="reservation-cancle-button-fix">예약취소</button>
          ) : null}
        </div>
      </Modal>
    </>
  );
}

export default ReservationButton;
