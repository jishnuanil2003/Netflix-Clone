import React from 'react'
import { useState,useEffect } from 'react';
import'./NavBar.css'
function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 0); // if you want to add bg after scrolling a bit, change 0 to e.g., 50
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll); // Clean up on unmount
      };
    }, []);
  return (
    <div className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" /> 
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Games</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
        </ul>
        </div>
        <div className="right-options">
            <div className="icons">
            <i className="ri-search-line"></i>
            <p>Children</p>
            <i className="ri-notification-3-line"></i>
            </div>
            <div className="avatar">
               <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt=''/>
               <i class="ri-arrow-drop-down-fill"></i>
            </div>
        </div>
    </div>
  )
}

export default NavBar
