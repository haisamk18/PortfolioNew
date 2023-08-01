import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Services from './assets/components/Skills'
import Projects from './assets/components/Projects'
import Contact from './assets/components/Contact'
import Skills from './assets/components/Skills'

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  
  useEffect(() => {
    const updateScreenWidth = () => {
      if(window.innerWidth <600){
        setSidebarOpen(false);
        
  
      }
      else {
        setSidebarOpen(true)
      }
    };
    
    
    window.addEventListener('resize',updateScreenWidth);
    
  }, [])
  

  const toggleSidebar = () => {
    setSidebarOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className='app'>

      
      
      <Navbar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/skills' element={<Skills/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        
      </Routes>

      
      
      
    </div>
  )
}

export default App
