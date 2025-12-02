import React from 'react'
import './About.scss'

import MongoDbImg from '../mongodb.svg'
import Expressimg from '../express.png'
import ReactImg from '../react.png'
import NodeImg from '../node.png'
import {useNavigate} from 'react-router-dom'
import { AiOutlineDownCircle } from 'react-icons/ai'

function About() {
  const navigate=useNavigate();
  return (
    <div className='aboutcon'>
      <div className="abouthead">ABOUT</div>
      <div className="aboutwrapper">
      <div className="firstsec">  I am
        <div>I’m Haisam, a Full-Stack Developer & Mechanical Engineer passionate about building technology that connects software with EV systems. I develop modern web apps using the MERN stack and also work on motor testing, data acquisition, and EV performance tools.</div>
        <div>Curiosity and problem-solving define my work—I love creating solutions that are clean, meaningful, and accessible to everyone.</div>
       
       </div>
      <div className="techstack">
        <span>Tech Stack i prefer:-</span><img src={MongoDbImg}></img><img src={Expressimg}></img><img src={ReactImg}></img><img src={NodeImg}></img>  
      </div>
      </div> 
      <AiOutlineDownCircle onClick={()=> navigate('/skills')} className='dropdown'/>
    </div>
  )
}

export default About
