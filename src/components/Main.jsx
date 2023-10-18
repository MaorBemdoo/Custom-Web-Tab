import React from "react";
import {GitHub, LinkedIn, Twitter} from '@mui/icons-material'

const Main = ({className}) => {
    return (
        <main className={className}>
            <p>4:17<sup>PM</sup></p>
            <p>Good morning, Bem.</p>
            <div className="socialIcons">
                <a href="https://github.com/MaorBemdoo"><GitHub fill="black"/></a>
                <a href="https://www.linkedin.com/in/bemdoo-maor-449698279/"><LinkedIn fill="blue"/></a>
                <a href="https://twitter.com/BemdooMaor"><Twitter fill="blue"/></a>
            </div>
        </main>
    )
}

export default Main;
