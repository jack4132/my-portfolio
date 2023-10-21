/*
 * File: Home.jsx
 * Project: portfolio
 * File Created: Friday, 20th October 2023 5:20:40 pm
 * Author: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Last Modified: Saturday, 21st October 2023 3:17:08 pm
 * Modified By: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Copyright 2020 - 2023 Mutual Mobile, Mutual Mobile
 */
import React from 'react';
import Banner from '../Banner/Banner';
import ProjectCard from '../shared/ProjectCard/ProjectCard';
import "./Home.css"

const Home = () => {
    return (
        <div>
           <Banner/> 
           <div className='roboto-mono home-container' ><h3 style={{padding:'2rem 0rem 1rem 0rem', fontSize:'2rem'}}>Recent Work</h3>
           <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)',gap:'2rem'}}>
            <div style={{borderTop:'dotted 2px black', paddingTop:"1rem"}}>
            <ProjectCard refLink={'https://basidialearning.com/'} image={'/basidia-cover.png'} name={"Basidia Landing Page"} description={"I designed and developed an online educational platform for my former company, catering to students preparing for medical examinations."}/>
            </div>
            <div style={{borderTop:'dotted 2px black', paddingTop:"1rem"}}>
            <ProjectCard refLink={'https://heroic-faloodeh-0091c2.netlify.app/'} image={'/movie-app.png'} name={"Movie Platform"} description={"This online platform is inspired by the popular entertainment app Netflix, allowing users to enjoy movie trailers from a curated list."}/>
            </div>
            <div>
            <ProjectCard refLink={'https://relaxed-druid-1ddc3f.netlify.app/home'} image={'/cafe-landing.png'} name={"Restaurant portal"} description={"This online platform is designed for restaurants to showcase their offerings in the market."}/>
            </div>
            <div>
            <ProjectCard refLink={'https://funny-cactus-42f73b.netlify.app/weather'} image={'/weather.png'} name={"Weather"} description={"This online platform provides weather information for a selected city."}/>
           </div>
           </div></div>
        </div>
    );
};

export default Home;