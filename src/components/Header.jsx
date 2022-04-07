import React from 'react'
import Navbar from "./Navbar"
/* import microphone from "../images/mic4.jpg" */

const Header = () => {
  return (
    <div id="main">
        <Navbar/>

        <div className="name">
            <h1>Tribe of<span> Jones</span>{/* <img src={microphone} alt={microphone} /> */}</h1>
            <p className="details">You are Welcome to the official Website of your favorite Gospel Artist</p>

            <div className="header-btns">
                <a href="https://www.paypal.com/donate/?hosted_button_id=B4RF7DUNXHXCS" target="_blank" rel="noopener noreferrer" className="cv-btn">Support me</a>
                <a href="https://music.apple.com/us/artist/tribe-of-jones/1574320598" target="_blank" rel="noopener noreferrer" className="cv-btn1">Download Songs</a>
            </div>

            {/* <div className="arrow"></div> */}
        </div>

    </div>
  )
}

export default Header