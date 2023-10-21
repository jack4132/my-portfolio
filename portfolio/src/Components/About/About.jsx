/*
 * File: About.jsx
 * Project: portfolio
 * File Created: Friday, 20th October 2023 11:57:54 pm
 * Author: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Last Modified: Saturday, 21st October 2023 1:14:39 am
 * Modified By: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Copyright 2020 - 2023 Mutual Mobile, Mutual Mobile
 */
import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div>
        <div style={{backgroundColor:"#10283B",height:"500px"}}>
            <div style={{width:"80%",margin:"auto",display:"flex",alignItems:"center"}}><h4 className='about-banner'>NICE TO<br/> MEET YOU.</h4></div>
        </div>
                    <div style={{width:"70%",margin:"auto",padding:"2rem 0rem"}}> <h3 className='about-txt' style={{fontWeight:'bold',fontSize:'1.2rem'}}>About me</h3><p className='about-txt' style={{fontSize:'1rem'}}>I am a versatile frontend developer with a passion for creating user-centric digital experiences. My skills encompass various technologies and frameworks, allowing me to design and build web applications that deliver outstanding performance. I have a track record of collaborating with diverse teams and successfully contributing to projects across different industries. My experience extends to web and mobile app development, accessibility, and optimizing web performance. I am committed to staying up-to-date with the latest industry trends and best practices to consistently deliver high-quality solutions.</p><button style={{borderRadius:"10px",borderColor:"#10283B",backgroundColor:"#fff",padding:"0.7rem",cursor:"pointer"}}><a href="./Resume_2023.pdf" style={{textDecoration:"none",fontSize:"14px",color:"#10283B"}}>View Resume</a></button></div>
        </div>
    );
};

export default About;