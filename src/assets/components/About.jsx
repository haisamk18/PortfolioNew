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
      <div className="firstsec"> 
        <div> I am Haisam, a curious and passionate Full-Stack Developer hailing from the vibrant city of Aligarh, India. My journey in the world of coding has been an adventure filled with creativity, logic, and an unyielding desire to build exceptional solutions.</div>
        <div>As a tech enthusiast, I have embraced the MERN stack, honing my skills in React and Vue.js to craft captivating front-end designs that breathe life into web applications. On the back-end, I am well-versed in the power of Node.js and Python, enabling me to develop robust and scalable systems that deliver seamless performance.</div>
        <div>Driven by a sense of purpose, I am on a mission to make a difference through my coding abilities. My ultimate goal is to create applications that not only solve problems but also leave a lasting, positive impact on people's lives. Ethical coding practices and accessibility are at the heart of my work, ensuring that my applications are accessible to everyone.</div>
        <div>Innovation is the compass that guides me, and I am always eager to explore fresh challenges that push the boundaries of what's possible in software development. Embracing each project as an opportunity for growth, I approach every line of code with enthusiasm and dedication.</div>
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