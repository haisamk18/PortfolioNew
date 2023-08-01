import React from 'react'
import './Skills.scss'
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

function Skills() {
  const navigate=useNavigate();

  const SkillsData =[ 
    {
      Img:Cplus,
      Name:"C++"
    },
    {
      Img:js,
      Name:"JavaScript"
    },
    {
      Img:Python,
      Name:"Python"
    },
    {
      Img:ReactJS,
      Name:"ReactJS"
    },
    {
      Img:node,
      Name:"NodeJS"
    },
    {
      Img:ExpressImg,
      Name:"ExpressJs"
    },
    {
      Img:Next,
      Name:"NextJS"
    },
    {
      Img:MongoImg,
      Name:"MongoDB"
    },
    {
      Img:flutterImg,
      Name:"Flutter"
    },
    {
      Img:html,
      Name:"HTML5"
    },
    {
      Img:TailwindCSS,
      Name:"TailwindCSS"
    },
    {
      Img:FirebaseImg,
      Name:"Firebase"
    },
    {
      Img:Git,
      Name:"Git"
    },
    {
      Img:PostmanImg,
      Name:"Postman"
    },
    {
      Img:FigmaImg,
      Name:"Figma"
    },
  ]
  return (
    <div className='skillscon'>
      <div className="skilsshead">Skills</div>
      <div className='skillswrapper'>
      <div className="skillconhead">Technologies & Tools I work with:</div>
      <div className='skillscon'>
        {SkillsData.map((e)=> {
          return (<div key={e.Name} className='skill'>
            <img src={e.Img}></img>
            <div>{e.Name}</div>
          </div>)
        })}

      </div>
      </div> 
      <AiOutlineDownCircle onClick={()=> navigate('/projects')} className='dropdown'/>
    </div>
  )
}

export default Skills