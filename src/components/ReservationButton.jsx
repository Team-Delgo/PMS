import React, { useState, useEffect } from "react";
import Modal from "react-modal";

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
        console.log(place)
    }, [])

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div style={{ marginBottom: "30px" }}>
                <button className="reservation-button" onClick={openModal}>{index + 1}.{place.placeName} {place.userName}</button>
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
                <div className="booker">{place.userName}</div>
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
                <div className="people-number">
                    <div>인원수</div>
                    <div>{place.personStandardNum}명</div>
                </div>
                <div className="added-people">
                    <div>인원추가</div> <div>{place.personExtraNum}명</div>
                </div>
                <div className="dog-number">
                    <div>반려견수</div> <div>{place.petStandardNum}마리</div>
                </div>
                <div className="added-dog">
                    <div>반려견추가</div>
                    <div>{place.petExtraNum}마리</div>
                </div>
                <div className="etc">기타</div>
                <div className="reservation-button-container">
                    <button className="reservation-cancle-button">예약취소</button>
                    <button className="reservation-confirmation-button">예약확정</button>
                </div>
            </Modal>
        </>
    );
}

export default ReservationButton;
