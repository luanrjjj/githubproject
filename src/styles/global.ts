import {createGlobalStyle} from 'styled-components';

import githubBackground from '../assets/githubBackground.svg'

export default createGlobalStyle `
* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}

body {
    background:#FFF url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
}

body,input,button { 
    font: 16px Roboto, sans-serif;
}

#root {
    max-width:1500px;
    margin:0 auto;
   
}

button {
    cursor:pointer;
}

h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 500;
  }



 

  input {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

`