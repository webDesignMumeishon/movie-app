import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/movie-icon.png'
import { IoFilmOutline } from "react-icons/io5";



import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <NavLink exact to="/"><IoFilmOutline className="icon-movie"/></NavLink>
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}