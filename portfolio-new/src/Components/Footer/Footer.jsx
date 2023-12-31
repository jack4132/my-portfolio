/*
 * File: Footer.jsx
 * Project: portfolio
 * File Created: Friday, 20th October 2023 7:15:08 pm
 * Author: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Last Modified: Friday, 20th October 2023 11:52:36 pm
 * Modified By: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Copyright 2020 - 2023 Mutual Mobile, Mutual Mobile
 */
import React from 'react';
import "./Footer.css"
import { SocialIcon } from 'react-social-icons'


const Footer = () => {
    return (
        <div className='background-primary footer' style={{width:'100%'}} ><p style={{fontSize:"1.5rem",color:"#fff",textAlign:"center"}}>Contact At:</p><div style={{display:'flex',justifyContent:"center",gap:"1rem"}}><a href="https://www.linkedin.com/in/jthounaojam/"><SocialIcon network="linkedin"/></a><a href="https://github.com/jack4132"><SocialIcon network="github"/></a></div></div>
    );
};

export default Footer;