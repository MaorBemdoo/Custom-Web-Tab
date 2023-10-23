import styled from "styled-components";
import Header from "../components/Header";

export const HeaderStyle = styled(Header)`
  display: flex;
  // align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 0.5em;
  & nav:first-child form {
    display: flex;
    align-items: center;
    width: 100px;
    transition: all 500ms ease;
    transform-origin: left;
    & > input {
      border: none;
      outline: none;
      background-color: transparent;
      width: 100%;
      &::placeholder {
        color: white;
      }
    }
    & button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
  & nav:first-child.activeNav1 form {
    width: 500px;
    height: 30px;
    border-radius: 6px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    & * {
      color: black;
    }
    & input {
      font-size: 1.1rem;
      &::placeholder {
        color: gray;
      }
    }
  }
  & nav:nth-child(2){
    text-align: center;
    & svg{
      font-size: 2rem;
      cursor: pointer;
    }
    & ul{
      background-color: white;
      list-style: none;
      padding: 1em;
      border-radius: 4px;
      transform: translateY(-50px);
      opacity: 0;
      user-select: none;
      pointer-events: none;
      transition: all 500ms ease;
      & li{
        cursor: pointer;
        text-align: start;
        &:first-child{
          border-bottom: 1px solid black;
        }
        &:not(:first-child){
          border-radius: 4px;
          padding: .4em;
          margin-top: .5em;
          &:hover{
            background-color: #f1f1f1;
          }
        }
      }
      & *{
        color: black;
      }
    }
  }
  & nav:nth-child(2).activeNav2{
    & ul{
      transform: translateY(0);
      opacity: 1;
      user-select: all;
      pointer-events: all;
    }
  }
  & nav:last-child {
    text-align: center;
    & div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.3rem;
    }
    & p {
      font-size: 0.8rem;
      margin: 0;
      padding-top: 0.1em;
    }
  }
`;
