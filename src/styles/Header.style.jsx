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
        width: 100px;
        transition: all 500ms ease;
        transform-origin: left;
        &>input{
            border: none;
            outline: none;
            background-color: transparent;
            width: 100%;
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
        align-items: center;
        padding: .5em;
        & *{
            color: black;
        }
        & input{
            font-size: 1.1rem;
            &::placeholder{
                color: gray;
            }
        }
    }
`