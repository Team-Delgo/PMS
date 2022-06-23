import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'
import './ReservationManagement.css'

const customStyles = {
  content: {
    top: '50%',
    left: '85%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    height:'100%',
    width:"400px"
  },
};

const ReservationManagement = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [datesArray,setDatesArray] = useState("")
  let date = new Date();
  const MONTH = date.getMonth();
  const [month, setMonth] = useState(MONTH+1);
  const YEAR = date.getFullYear();
  const [year, setYear] = useState(YEAR);

  useEffect(() => {
    renderCalendar();
  }, [month]);

  const openModal = () => {
    setIsOpen(true);  
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const renderCalendar = () => {
    if (month===13){
      setMonth(1)
      setYear(year+1)
    }
    else if(month===0){
      setMonth(12)
      setYear(year-1)
    }

    document.querySelector(".year-month").textContent = `${year}년 ${
      month
    }월`;

    const prevLast = new Date(year, month-1, 0);
    const thisLast = new Date(year, month, 0);

    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    const prevDates = [];
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];

    if (PLDay !== 6) {
      for (let i = 0; i < PLDay + 1; i++) {
        prevDates.unshift(PLDate - i);
      }
    }
    for (let i = 1; i < 7 - TLDay; i++) {
      nextDates.push(i);
    }

    const dates = prevDates.concat(thisDates, nextDates);

    const datesElement = dates.map((date, i) => {
      return (
        <>
        <div className="date" onClick={openModal} key={i}>
          <div className="date-number">{date}</div>
          <div className="case-number">(3건)  </div>
        </div>
        </>
      );
    });
    setDatesArray(datesElement)
  };

  const prevMonth = () => {
    // date.setMonth(date.getMonth() - 1); 
    setMonth(month-1)
  }

  const nextMonth = () => {
    // date.setMonth(date.getMonth() + 1);
    setMonth(month+1);
  }

  const goToday = () => {
    // date = new Date();
    setMonth(MONTH+1);
  }

  return (
    <div>
      <div>
        <div className="id">seoeun98@naver.com</div>
        <div className="logout">로그아웃</div>
      </div>
      <div className="body">
        <div className="calendar">
          <div className="header">
            <div className="year-month"></div>
            <div className="nav">
              <button className="nav-btn go-prev" onClick={prevMonth}>
                &lt;
              </button>
              <button className="nav-btn go-today" onClick={goToday}>
                이번달
              </button>
              <button className="nav-btn go-next" onClick={nextMonth}>
                &gt;
              </button>
            </div>
          </div>
          <div className="main">
            <div className="days">
              <div className="day sunday">일</div>
              <div className="day">월</div>
              <div className="day">화</div>
              <div className="day">수</div>
              <div className="day">목</div>
              <div className="day">금</div>
              <div className="day saturday">토</div>
            </div>
            <div className="dates">{datesArray}</div>
          </div>
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1 style={{ paddingTop: "50px" }}>예약정보</h1>
            <div
              onClick={closeModal}
              style={{ cursor: "pointer", padding: "80px 10px 0 0" }}
            >
              <img
                className="exit"
                src={`${process.env.PUBLIC_URL}/assets/images/exit.png`}
                alt="detail"
              />
            </div>
          </div>
          <div className="booker">김서은</div>
          <div className="phone">01012345678</div>
          <div className="place-name">멍멍하우스</div>
          <div className="start-date">
            <div>입실일</div> <div>2022.00.00(월)</div>
          </div>
          <div className="end-date">
            <div>퇴실일</div>
            <div>2022.00.00(화)</div>
          </div>
          <div className="people-number">
            <div>인원수</div>
            <div>2명</div>
          </div>
          <div className="added-people">
            <div>인원추가</div> <div>1명</div>
          </div>
          <div className="dog-number">
            <div>반려견수</div> <div>2마리</div>
          </div>
          <div className="added-dog">
            <div>반려견</div>
            <div>추가1마리</div>
          </div>
          <div className="etc">기타</div>
        </Modal>
      </div>
    </div>
  );
};

export default ReservationManagement;

