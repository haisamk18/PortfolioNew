import React from 'react'
import ProjectCard from './ProjectCard'
import './Projects.scss'

function Projects() {
  return (
    <div className='projects'>
        <div className="head">PROJECTS</div>
        <div className="cardcon">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/> 
        </div>
    </div>
  )
}

export default Projects