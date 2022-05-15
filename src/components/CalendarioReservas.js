import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarioReservas = (props) =>{
    const{minDates, maxDates}= props;
    const [date, setDate] = useState(new Date());

    return (
    <div className='Main'>
        <div>
        <Calendar minDate={minDates} maxDate={maxDates}className="react-calendar" onChange={setDate} value={date} showDoubleView={true} selectRange={true} returnValue="range"/>
        </div>
    <div className='footer-calender'>
        
    {date.length > 1 ? (
        <p><span>Check in:</span>{' '} {date[0].toDateString()} &nbsp; - &nbsp; <span>Check out: </span> {date[1].toDateString()} </p> ) : (
        <p>{date.toDateString()} </p>
    
        )}
    </div>
    </div>
    );
}

export default CalendarioReservas;
