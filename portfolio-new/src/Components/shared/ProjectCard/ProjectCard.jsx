/*
 * File: ProjectCard.jsx
 * Project: portfolio
 * File Created: Friday, 20th October 2023 5:29:24 pm
 * Author: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Last Modified: Friday, 20th October 2023 7:13:11 pm
 * Modified By: Jackson Thounaojam (jackson.thounaojam@mutualmobile.com)
 * -----
 * Copyright 2020 - 2023 Mutual Mobile, Mutual Mobile
 */
import React from 'react';
import './ProjectCard.css'

const ProjectCard = ({refLink,image,name,description}) => {
    return (
        <div>
            <a href={refLink} style={{position:'relative',backgroundColor:'#000',cursor:'pointer'}}>
                <div style={{position:'relative',backgroundColor:'#000',cursor:'pointer'}}>
            <img src={image} alt="project" width={'100%'} style={{opacity:0.4}}/>
            </div>
            <p className='name-txt' style={{position:'absolute',top:0,bottom:0,left:0,right:0,display:'flex',justifyContent:'center',alignItems:'center'}}>{name}</p>
            </a>
            {/* <a href={"https://heroic-faloodeh-0091c2.netlify.app/"}>{ref}</a> */}
            <p className='description-txt' style={{fontWeight:'bold',fontSize:'1.2rem'}}>Description</p>
            <p className='description-txt' style={{fontSize:'1rem'}}>{description}</p>
        </div>
    );
};

export default ProjectCard;