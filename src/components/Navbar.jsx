import React from 'react'
import "../styles/Navbar.css";

const Navbar = () => {

  const handleClickScroll = () => {
    const element = document.getElementById('featured-main');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }

  }

  return (
    <>
        <nav id="nav">
            <h1>Proactivist</h1>

            <ul id="nav-ul">
                <li onClick={handleClickScroll} id="nav-li">Blogs</li>
                <li id="nav-li">Resources</li>
                <li id="nav-li">Team</li>
                <li id="nav-li"><button id="nav-btn">Join</button></li>

            </ul>
        </nav>
    </>
  )
}

export default Navbar