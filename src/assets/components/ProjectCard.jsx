import React from 'react'
import saeweb from '../wthrapp.png';
import {AiFillGithub} from 'react-icons/ai'
import {CgMediaLive} from 'react-icons/cg'

function ProjectCard() {
  return (
    <div className='card'>
       
        <img src={saeweb}></img>
        <div className="overlay">
            <div className='linkcon'>
            <a href=''><AiFillGithub/></a>
            <a href=''><CgMediaLive/><span>Live</span></a>
            </div>
            
        </div>
      
        <div className="rightbox"></div>
    </div>
  )
}

export default ProjectCard