import React from 'react'
import logo from "../Assets/film_tape.png"
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
const navigate = useNavigate();

    return(
        <nav>
            <div className="nav__wrapper">
                <figure className="img__wrapper--nav">
                    <img src={logo} alt="company_logo" class="img__company img__company--logo"></img>
                </figure>
                <ul class="nav__link--list">
                   <li className="nav__link">
                    <Link to="/">
                        <a  className="
                    nav__link--anchor
                    link__hover-effect
                    link__hover-effect--black
                    ">Home</a>
                    </Link>
                    </li>
                   
                    <li className="nav__link">
                        <a className="
                    nav__link--anchor
                    link__hover-effect
                    link__hover-effect--black
                    ">Movie List</a>
                    </li>
                    <li className="nav__link" >
                        <a className="
                    nav__link--anchor
                    link__hover-effect
                    link__hover-effect--button
                    ">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;