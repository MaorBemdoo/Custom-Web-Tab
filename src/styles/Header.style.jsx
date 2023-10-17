import styled from "styled-components";
import Header from "../components/Header/Header";

export const HeaderStyle = styled(Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5em;
    & nav:first-child form{
        display: flex;
        align-items: center;
        &>input{
            border: none;
            outline: none;
            width: 60px;
            background-color: transparent;
            &::placeholder{
                color: white;
            }
        }
        & button{
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
        }
    }
    & nav:first-child.active form {
        width: 500px;
        height: 30px;
        border-radius: 6px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        padding: .5em;
        & *{
            color: black;
        }
        & input{
            width: 100%;
            font-size: 1.1rem;
            &::placeholder{
                color: gray;
            }
        }
    }
`