import React from "react";
import moment from "moment"
import { useState, useEffect } from "react";

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
    return (
        <main className={className}>
            <p>{moment().hour() > 12 ? moment().hour()-12 : moment().hour() == 0 ? 12 : moment().hour()}:{moment().minute() < 10 ? "0" + moment().minute() : moment().minute()}<sup>{moment().format("A")}</sup></p>
            <p>{moment().format("dddd")}, {moment().format("D") + " " + moment().format("MMMM")}, {moment().format("YYYY")}</p>
            <p>Good {MAEhandler(moment().hour())}, Bem.</p>
        </main>
    )
}

export default Main;
