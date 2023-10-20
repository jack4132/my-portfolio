/*
 * File: Banner.jsx
 * Project: portfolio
 * File Created: Friday, 20th October 2023 4:11:45 pm
 * Author: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Last Modified: Friday, 20th October 2023 5:18:53 pm
 * Modified By: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Copyright 2020 - 2023 Mutual Mobile, Mutual Mobile
 */
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-txt' style={{width:'75%', margin:'auto'}}><p style={{color:'#fff', fontSize:'1.5rem'}}>Hi I'm Jackson!</p><p style={{color:'#a0a09a', fontSize:'2.8rem',fontWeight:'bold'}}>ENGINEER AT <span style={{color:'#fff',textDecoration:'underline',textDecorationColor:'#e8e844'}}>MUTUAL MOBILE PVT LTD</span></p>
            <p style={{color:'#a0a09a', fontSize:'1.5rem',fontWeight:'bold',lineHeight:'2.5rem'}}>I craft digital products with a strong focus on <br/><span style={{color:'#fff'}}>user experience and human-centric design.</span></p>
            
            </div>

        </div>
    );
};

export default Banner;