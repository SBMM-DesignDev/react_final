import React from 'react'
import logo from "../Assets/film_tape.png"
import { useNavigate } from 'react-router-dom';

const Nav = () => {
const navigate = useNavigate();

    return(
        <nav>
            <div className="nav__wrapper">
                <figure className="img__wrapper--nav">
                    <img src={logo} alt="company_logo" className="img__company img__company--logo"></img>
                </figure>
                <ul className="nav__link--list">
                   <li className="nav__link">
                    <div onClick={() => navigate("/")} className="
                    nav__link--anchor
                    link__hover-effect
                    link__hover-effect--black
                    ">Home
                    </div>
                    </li>
                   
                    <li className="nav__link">
                        <div className="
                    nav__link--anchor
                    link__hover-effect
                    link__hover-effect--black
                    link
                    " disabled>Movie List</div>
                    </li>
                    <li className="nav__link" >
                        <div className="
                    nav__link--anchor
                    link__hover-effect
                    link__hover-effect--button
                    link
                    " disabled>Contact</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;