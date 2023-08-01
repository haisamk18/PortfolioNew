import React from 'react'
import ProjectCard from './ProjectCard'
import './Projects.scss'
import saewebsite from '../saewebsite.png';
import weatherweb from '../wthrapp.png'
import Portfolioapp from '../portfolio.png'
import Cplus from '../c++.png'; //
import ExpressImg from '../express.png'//
import FigmaImg from '../figma.svg'//
import FirebaseImg from '../firebase.png'//
import flutterImg from '../flutter.png'//
import Git from '../git.png'//
import html from '../html.png'//
import js from '../js.png' //
import MongoImg from '../mongodb.svg'//
import Next from '../nextjs.jpeg'//
import node from '../node.png'//
import PostmanImg from '../postman.svg'//
import Python from '../python.png' //
import ReactJS from '../react.svg' //
import TailwindCSS from '../tailwind.png'//
import { useNavigate } from 'react-router-dom';
import { AiOutlineDownCircle } from 'react-icons/ai';

function Projects() {
  const navigate=useNavigate();

  const Saeweb=["ReactJS","ExpressJs","MongoDB","Postman","Figma","TailwindCSS"]
  
  return (
    <div className='projects'>
        <div className="head">PROJECTS</div>
        <div className="cardcon">
            <ProjectCard 
               img={saewebsite}
               tech={Saeweb}
               desc='A dynamic website designed for the SAE collegiate club, providing students with up-to-date news, team information, alumni profiles, and seamless registration and networking capabilities.'
               livelink="https://www.saezhcet.org/"
               githubrepo='https://github.com/haisamk18/saeweb'
            
            />
            <ProjectCard
               img={weatherweb}
               desc='This WeatherApp is a dynamic web application designed to deliver live, hourly, and weekly weather updates. With its intuitive and modern interface, users can easily access real-time weather data for their location and other desired areas.'
               livelink='https://wthrapp.vercel.app/'
               githubrepo='https://github.com/haisamk18/wthrapp'
            />
            <ProjectCard
                img={Portfolioapp}
                desc='PortfolioApp is a sleek and interactive web application designed to present my professional journey and achievements in a captivating manner. With five distinct sections—Home, About Me, Skills, Projects, and Contact Me—visitors can easily navigate and explore my expertise. '
                livelink='https://haixsamk18.vercel.app/'
                githubrepo='https://github.com/haisamk18/PortfolioNew'
            />
            
        </div>
        <AiOutlineDownCircle onClick={()=> navigate('/contact')} className='dropdown'/>
    </div>
  )
}

export default Projects