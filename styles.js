import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background: #1a1918;
    color: white;
    padding: 10% 10%;
  }

  #__next {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ul {
    list-style: none;
    padding: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #fcd526;
    &:hover {letter-spacing: 0.2rem;}
  }

  .card {
    background-color: #f291e9;
    padding: 15px;
    width: 300px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 1px grey;

  }
`;
