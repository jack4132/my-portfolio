/*
 * File: Nav.js
 * Project: portfolio
 * File Created: Friday, 20th October 2023 3:18:06 pm
 * Author: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Last Modified: Saturday, 21st October 2023 12:14:50 am
 * Modified By: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Copyright 2020 - 2023 Mutual Mobile, Mutual Mobile
 */
import React from 'react';
import {  Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    return (
        <div className='background-primary' style={{width:'100%',position:'sticky',top:0,right:0,zIndex:10}}>
            <div className='nav-container'>
                <div ><Link to="/" className='logo-name'>Jackson Thounaojam</Link></div> 
             <div className='nav-menu'><Link className="nav-txt" to="/">Home</Link><Link to="/about" className="nav-txt">About</Link></div>
            </div>
        </div>
    );
};

export default Nav;