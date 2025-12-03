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

  const SkillsSet = [
    {
      Name:"Programming"
    },
    {
      Name:"EV & Cross-Functional"
    },
    {
      Name:"Mechanical"
    },
    {
      Name:"Management"
    },
    {
      Name: "Software Tools"
    }
   
  ]

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
  const Ev =["Electric Vehicle Architecture", "BMS Fundamentals" , "Motor & Motor Controller Basics" , "Power Electronics Basics" , "High/Low Voltage Systems","CAN Communication & Diagnostics" , "Hardware–Software Co-Simulation"]

  const Mech = ["Product Design", "Automotive Simulation", "Mechanical Manufacturing" , " Mechanical Manufacturing" , "Thermal Systems Analysis" , "Structural Design for EV Components" , "Quality Management"]
 
  const Managment = ["Project Management","Project Delivery", "Cross-Functional Collaboration","Team Management","Data Analysis","Engineering Documentation"]

  const Software = ["SolidWorks", "AutoCAD", "Ansys", "MATLAB Simulink", "IPG Carmaker", "Git/Github", "Arduino"]


  return (
    <div className='skillsconmain'>
      <div className="skilsshead">Skills</div>
      <div className='skillswrapper'>
      <div className="skillconhead">Technologies & Tools I work with:</div>
    
      <div className='skillscon'>
        <div className='left_part'>
          {SkillsSet.map((e)=> {
            return (<div key={e.Name} className="skilltitle">
                <div>{e.Name}</div>
            </div>)
          })}

        </div>
        <div className='right_part'>
          <div className='programming'>
            {SkillsData.map((e)=> {
              return(<div  className='imgcon'>
                 <div className='img'><img src={e.Img}></img></div>
                 <div className='language'>{e.Name}</div>
              </div>)
            })}
          </div>
          <div className="ev">
            {
              Ev.map((e)=> {
                return(<div className='evskills'>{e}</div>)
              })
            }
          </div>
          <div className="mech">
            {Mech.map((e)=> {
              return (<div className='mechskills'>{e}</div>)
            })}
          </div>
          <div className="managment">
            {Managment.map((e)=> {
              return(<div className='managementskills'>{e}</div>)
            })}
          </div>
          <div className="tools">
            {Software.map((e)=> {
              return(<div className='toolsname'>{e}</div>)
            })}
          </div>


        </div>
       

      </div>
     

      
    
      </div> 
      <AiOutlineDownCircle onClick={()=> navigate('/projects')} className='dropdown'/>
    </div>
  )
}

export default Skills