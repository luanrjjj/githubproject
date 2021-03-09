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
    max-width:1380px;
    margin:0 auto;
   
}

button {
    cursor:pointer;
}

`