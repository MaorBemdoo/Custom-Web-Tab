import React from "react";
import moment from "moment"
import { useState, useEffect } from "react";
import { jsx } from "@emotion/react";

const ThHandler = (date) => {
    if(date == 1){
        return "st"
    } else if(date == 2){
        return "nd"
    } else if(date == 3){
        return "rd"
    } else{
        return "th"
    }
}

const MAEhandler = (hour) => {
    if(hour < 12){
        return "morning"
    } else if(hour >= 12 && hour < 16){
        return "afternoon"
    } else{
        return "evening"
    }
}

const Main = ({className}) => {

    const [time, setTime] = useState(moment())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(moment());
        }, 1000);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(intervalID);
    }, []);

    return (
        <main className={className}>
            <p>{time.hour() > 12 ? time.hour()-12 : time.hour() == 0 ? 12 : time.hour()}:{time.minute() < 10 ? "0" + time.minute() : time.minute()}<sup>{time.format("A")}</sup></p>
            <p>{time.format("dddd")}, {time.format("D") + ThHandler(time.format("D")) + " " + time.format("MMMM")}, {time.format("YYYY")}</p>
            <p>Good {MAEhandler(time.hour())}, Bem.</p>
        </main>
    )
}

export default Main;
