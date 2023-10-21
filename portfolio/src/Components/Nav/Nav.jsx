/*
 * File: Nav.js
 * Project: portfolio
 * File Created: Friday, 20th October 2023 3:18:06 pm
 * Author: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Last Modified: Saturday, 21st October 2023 3:04:42 pm
 * Modified By: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Copyright 2020 - 2023 Mutual Mobile, Mutual Mobile
 */
import React from 'react';
import {  Link } from "react-router-dom";
import './Nav.css'
import {useLocation} from "react-router-dom"

const Nav = () => {
    const location=useLocation()
    console.log(location)
    return (
        <div className='background-primary' style={{width:'100%',position:'sticky',top:0,right:0,zIndex:10}}>
            <div className='nav-container'>
                <div ><Link to="/" className='logo-name'>Jackson Thounaojam</Link></div> 
             <div className='nav-menu'><Link className={`nav-txt ${location?.pathname ==="/" && "underline-txt"}`} to="/">Home</Link><Link to="/about" className={`nav-txt ${location?.pathname ==="/about" && "underline-txt"}`}>About</Link></div>
            </div>
        </div>
    );
};

export default Nav;