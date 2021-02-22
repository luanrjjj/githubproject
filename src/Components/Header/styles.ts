import styled from 'styled-components';


export const NavHeader  = styled.div `
position:absolute;
z-index:999;
top:0;
left:0;
right:0;
height:45px;
background:#fff;

`

export const NavLogo = styled.div`
background-color:#fff;
align-items:center;
display:flex;
margin-right: 5px;

.logo {
    right:0
}
.logo img { 
    margin-top:10px;
    margin-left:10px;
    margin-bottom:10px;
    height:45px;
    display:inline-block;
    vertical-align:middle
}
`