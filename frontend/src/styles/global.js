import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus{
        outline: 0;
    }
    html, body, #root{
    height: 100%;
  }
  body{
      -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font: 14px "Noto Serif", sans-serif;
  }
  a{
      text-decoration: none;
  }
  ul {
      list-style: none;
  }
  button {
      cursor: pointer;
  }


    @media (min-width: 768px) {
    ::-webkit-scrollbar{
    width: 7px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #024959;
    }
    ::-webkit-scrollbar-track{
        background-color: #dddddd;
    }
    }
`;
