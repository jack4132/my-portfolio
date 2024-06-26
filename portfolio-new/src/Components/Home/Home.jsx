/*
 * File: Home.jsx
 * Project: portfolio
 * File Created: Friday, 20th October 2023 5:20:40 pm
 * Author: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Last Modified: Monday, 11th December 2023 9:11:25 pm
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
           <div style={{marginBottom:'4rem'}}>
           <div className='roboto-mono home-container' ><h3 style={{padding:'2rem 0rem 1rem 0rem', fontSize:'2rem'}}>Recent Work</h3>
           <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)',gap:'2rem'}}>
            <div style={{borderTop:'dotted 2px black', paddingTop:"1rem"}}>
            <ProjectCard refLink={'https://mintdentistry.com/'} image={'/mint.png'} name={"Dental App"} description={"A sophisticated online platform has been meticulously crafted to serve as the virtual gateway to the world of Mint Dentistry, offering a comprehensive and user-friendly dental website experience."}/>
            </div>
            <div style={{borderTop:'dotted 2px black', paddingTop:"1rem"}}>
            <ProjectCard refLink={'https://basidialearning.com/'} image={'/basidia.png'} name={"E-Learning Platform"} description={"This is an online e-learning platform for Basidia, targeting medical aspirants."}/>
            </div>
            <div >
            <ProjectCard refLink={'https://food-ninja-pwa-39d70.web.app/index.html'} image={'/recipe-memo.png'} name={"Recipe Memo"} description={"This is an online recipe memo designed as a Progressive Web App (PWA) to share homemade recipes."}/>
            </div>
            <div >
            <ProjectCard refLink={'https://heroic-faloodeh-0091c2.netlify.app/'} image={'/movie-app.png'} name={"Movie Platform"} description={"This is an online platform clone of popular entertainment app Netflix! This platform lets you enjoy trailer of movies in the list."}/>
            </div>
            <div>
            <ProjectCard refLink={'https://relaxed-druid-1ddc3f.netlify.app/home'} image={'/cafe-landing.png'} name={"Restaurant portal"} description={"This is an online platform for demo restaurant to present their place in market"}/>
            </div>
            <div>
            <ProjectCard refLink={'https://funny-cactus-42f73b.netlify.app/weather'} image={'/weather.png'} name={"Weather"} description={"This is an online platform to check weather for selected city"}/>
           </div>
           </div></div>
           </div>
        </div>
    );
};

export default Home;