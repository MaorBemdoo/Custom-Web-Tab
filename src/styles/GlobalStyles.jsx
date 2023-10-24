import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    *{
        color: white;
        margin: 0;
        padding: 0;
        border: 0;
    }
    a{
        text-decoration: none;
    }
    body{
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }
    #root{
        width: 100vw;
        height: 100vh;
        max-height: 100vh;
        background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTHzKee7eRDQGTQBdasMUoQQxJlryQJAlNA&usqp=CAU');
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`