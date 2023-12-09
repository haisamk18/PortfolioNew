import React from 'react'

import {AiFillGithub} from 'react-icons/ai'
import {CgMediaLive} from 'react-icons/cg'

function ProjectCard({img,livelink,githubrepo,desc,tech}) {
  
  const data=tech;
  console.log(data)
  return (
    <div className='card'>
       
        <img src={img}></img>
        <div className="overlay">
            <div className='linkcon'>
            <a href={githubrepo} target='_blank'><AiFillGithub/></a>
            <a href={livelink} target='_blank'><CgMediaLive/><span>Live</span></a>
            </div>
            
        </div>
      
        <div className="rightbox">
          <div className="descriptionofproject">{desc}</div>
          
        </div>
    </div>
  )
}

export default ProjectCard