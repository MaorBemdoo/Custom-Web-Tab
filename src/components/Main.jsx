import React from "react";
import moment from "moment"

const Main = ({className}) => {
    return (
        <main className={className}>
            <p>{moment().hour() > 12 ? moment().hour()-12 : moment().hour()}:{moment().minute()}<sup>{moment().format("A")}</sup></p>
            <p>{moment().format("dddd")}, {moment().format("D") + " " + moment().format("MMMM")}, {moment().format("YYYY")}</p>
            <p>Good morning, Bem.</p>
        </main>
    )
}

export default Main;
