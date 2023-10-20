/*
 * File: Nav.js
 * Project: portfolio
 * File Created: Friday, 20th October 2023 3:18:06 pm
 * Author: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Last Modified: Friday, 20th October 2023 5:19:34 pm
 * Modified By: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Copyright 2020 - 2023 Mutual Mobile, Mutual Mobile
 */
import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className='background-primary' style={{width:'100%',position:'sticky',top:0,right:0,zIndex:10}}>
            <div className='nav-container'>
                <a href="#" className='logo-name'>Jackson Thounaojam</a>
                <div className='nav-menu'><a>Home</a><a>About</a></div>
            </div>
        </div>
    );
};

export default Nav;