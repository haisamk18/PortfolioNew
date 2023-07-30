import React, { useState,useEffect } from 'react'
import './Navbar.scss'
import {AiFillHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {FcSelfServiceKiosk} from 'react-icons/fc'
import {GrProjects} from 'react-icons/gr'
import {MdContactMail} from 'react-icons/md'
import {TiChevronLeft} from 'react-icons/ti'
import {TiChevronRight} from 'react-icons/ti'
import {HiMenuAlt3} from 'react-icons/hi'
import {Link} from 'react-router-dom'


function Navbar({ isOpen, toggleSidebar }) {

  const Menuitems=[
    {
      id:'1',
    name:"Home",
    route:''
    },
    {
      id:'2',
      name:"About",
      route:'/about'
      },
      {
        id:'3',
        name:"Services",
        route:'/services'
        },
        {
          id:'4',
          name:"Projects",
          route:'/projects'
          },
          {
            id:'5',
            name:"Contact",
            route:'/contact'
            }

  ]
  
  
  return (
    
  <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <div className="firstcon">
      <div className="logo">
        <TiChevronLeft/>HK18/<TiChevronRight/>
      </div>
      <HiMenuAlt3 onClick={toggleSidebar} className='menu'/>
      
    </div>
    <div className="menucon">
      <div className="listnavs">
        {Menuitems.map((i)=> {
          return <div key={i.id} className='list'>
              <Link className='list' to={i.route}>
              <div className="icon">
                {i.id=='1'?(<AiFillHome/>):
                  (i.id=='2'?(<FcAbout/>):
                  (i.id=='3'?(<FcSelfServiceKiosk/>):
                  (i.id=='4'?(<GrProjects/>):
                  (<MdContactMail/>))))
                }
              
            </div>
            <div className="name">{i.name}</div>
              </Link>
            
            
          </div>

        })}

      </div>
    </div>
   </div>

  )
  }
export default Navbar