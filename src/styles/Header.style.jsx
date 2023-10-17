import styled from "styled-components";
import Header from "../components/Header/Header";

export const HeaderStyle = styled(Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5em;
    & nav:first-child form{
        &>input{
            border: none;
            outline: none;
            background-color: transparent;
        }
        
    }
`