import React from "react";
import moment from "moment"

const Main = ({className}) => {
    return (
        <main className={className}>
            <p>{moment().hour() > 12 ? moment().hour()-12 : moment().hour()}:{moment().minute()}<sup>{moment().hour() >= 12 ? "PM" : "AM"}</sup></p>
            <p>Thursday, 14th August, 2023</p>
            <p>Good morning, Bem.</p>
        </main>
    )
}

export default Main;
