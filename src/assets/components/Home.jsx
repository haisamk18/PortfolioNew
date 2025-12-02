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
        <div className="designation">Developer. Engineer. Problem Solver.</div>
        <div className="breif">I create powerful web applications and engineer practical EV solutions, blending hardware intuition with software expertise.a passion for elegant code, I specialize in delivering top-notch web applications that leave a lasting impression.</div>
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
