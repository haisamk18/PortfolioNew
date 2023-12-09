import React from 'react'
import './Home.scss'
import {useNavigate} from 'react-router-dom';
import Img from '../haisamimg.png'
import {AiOutlineDownCircle} from 'react-icons/ai'


function Home() {
  const navigate=useNavigate();
  return (
    <div className='homecon'>
      <div className="leftcon">
        <div className='textall'>
        <div className="greetings">Hello, I'm</div>
        <div className="name">Haisam Khurshid</div>
        <div className="designation">Full Stack Developer</div>
        <div className="breif">a dedicated full-stack developer on a mission to transform creative ideas into functional realities. With a keen eye for detail and a passion for elegant code, I specialize in delivering top-notch web applications that leave a lasting impression.</div>
        </div>
      </div>
      <div className="rightcon">
        <img src={Img}></img>
      </div>
      <div>
      <AiOutlineDownCircle onClick={()=> navigate('/about')} className='dropdown'/>
      </div>
    </div>
  )
}

export default Home