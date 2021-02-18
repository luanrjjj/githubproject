import React from 'react';
import {NavHeader,NavLogo} from './styles';
import gitLogo from '../../assets/gitLogo.png'

const Header:React.FC = () => {
    return(
    <NavHeader>
        <NavLogo>
        <a className = 'logo' href = "/">
            <img src = {gitLogo} alt = "gitlogo"/>
        </a>
        </NavLogo>
    </NavHeader>
    )

}
export default Header