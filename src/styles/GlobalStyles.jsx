import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        color: white;
    }
    body{
        margin: 0;
        padding: 0;
    }
    #root{
        width: 100vw;
        height: 100vh;
        background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTHzKee7eRDQGTQBdasMUoQQxJlryQJAlNA&usqp=CAU');
        background-repeat: no-repeat;
        background-size: cover;
    }
`