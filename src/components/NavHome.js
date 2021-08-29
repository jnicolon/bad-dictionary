import React from 'react'
import logoImg from '../assets/logo.png'

function NavHome() {
    return (
        <div className="home-nav-container">
            <img src={logoImg} alt="logo"/>
            <h1>Bad Dictionary</h1>
        </div>
    )
}

export default NavHome
