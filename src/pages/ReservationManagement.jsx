import React, { useState, useEffect } from 'react';
import './ReservationManagement.css'

const ReservationManagement = () => {
  let date = new Date();

  const renderCalendar = () => {
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    document.querySelector(".year-month").textContent = `${viewYear}년 ${
      viewMonth + 1
    }월`;

    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);

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

    dates.forEach((date, i) => {
      dates[i] = `<div class="date">${date}</div>`;
    });

    document.querySelector(".dates").innerHTML = dates.join("");
  };

  const prevMonth = () => {
    console.log(1)
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  }

  const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  }

  const goToday = () => {
    date = new Date();
    renderCalendar();
  }


  useEffect(() => {
    renderCalendar();
  }, []);

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
                Today
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
            <div className="dates"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationManagement;

