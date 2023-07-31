import React from 'react'
import './About.scss'

import MongoDb from '../mongodb.png'
import Express from '../express.png'
import ReactImg from '../react.png'
import Node from '../node.png'

function About() {
  return (
    <div className='aboutcon'>
      <div className="abouthead">ABOUT</div>
      <div className="aboutwrapper">
      <div className="firstsec"> I'm Haisam, a curious and passionate Full-Stack Developer hailing from Aligarh, India. Embracing both creativity and logic, I find my home in the world of coding, where each line becomes an opportunity to build something incredible. My journey in software development has been an exhilarating ride through diverse technologies - from bringing captivating front-end designs to life using React and Vue.js, to crafting robust back-end systems with Node.js and Python. I'm on a mission to make a difference through ethical and accessible coding, creating applications that not only solve problems but also leave a positive impact on people's lives. Innovation is my compass, and I'm always eager to explore fresh challenges that push the boundaries of what's possible. </div>
      <div className="techstack">
        <span>My Tech Stack :-</span><img src={MongoDb}></img><img src={Express}></img><img src={ReactImg}></img><img src={Node}></img>  
      </div>
      </div> 
    </div>
  )
}

export default About