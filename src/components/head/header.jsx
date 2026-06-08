import React from 'react'
import Profile from "../../assets/profile.webp"
import "./header.css";

function Header() {
  return (
<div className="intro-container">
    <div className="image-wrapper">
        <img src={Profile} alt="profile photo" />
    </div>

    <div className="text-wrapper">
        <h1 className='fw-bold '>Hi there, I'm Achini!</h1>
        <p className='mt-5'>
            I'm a frontend developer who graduated from Sundsgårdens folkhögskola and completed the Meta Front-End Developer Professional Certificate. I've built a strong foundation in modern web development and enjoy turning ideas into clean, functional, and user-friendly websites. Outside of coding, I'm someone who loves hiking and seeking out new adventures in nature, always looking for opportunities to explore, learn, and grow both personally and professionally.
        </p>
    </div>
</div>
  )
}

export default Header