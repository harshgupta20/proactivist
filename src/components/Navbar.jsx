import React from 'react'
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
        <nav id="nav">
            <h1>Proactivist</h1>

            <ul id="nav-ul">
                <a href="#" id="nav-a"><li id="nav-li">Blogs</li></a>
                <a href="#" id="nav-a"><li id="nav-li">Resources</li></a>
                <a href="#" id="nav-a"><li id="nav-li">Team</li></a>
                <a href="#" id="nav-a"><li id="nav-li"><button id="nav-btn">Join</button></li></a>

            </ul>
        </nav>
    </>
  )
}

export default Navbar