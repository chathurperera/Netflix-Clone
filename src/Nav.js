import React, { useState , useEffect } from 'react'
import "./Nav.css";
import logo from './Images/netflixlogo.png';
import avatar from './Images/Netflix-avatar.png';

const Nav = () => {
    const [show,handleShow] = useState(false);
    
    const transitionNavBar = () => {
        if(window.scrollY > 100 ){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',transitionNavBar)
        return () => window.removeEventListener('scroll',transitionNavBar);
    },[])

    return (
        <nav className={`nav  ${show && "nav__black"}`}>
            <div className="nav__content">
                <img src={logo} className='nav__logo' alt="" />
                <img src={avatar} className='nav__avatar' alt="" />
            </div>
        </nav>
    )
}

export default Nav
