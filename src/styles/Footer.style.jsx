import styled from "styled-components";
import Footer from "../components/Footer";

export const FooterStyle = styled(Footer)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0.5em;
    height: 8vh;
    & p{
        width: 500px;
    }
`