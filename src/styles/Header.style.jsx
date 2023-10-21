import styled from "styled-components";
import Header from "../components/Header";

export const HeaderStyle = styled(Header)`
  display: flex;
  // align-items: center;
  justify-content: space-between;
  /* height: 10vh; */
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
  & nav:first-child.active form {
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
