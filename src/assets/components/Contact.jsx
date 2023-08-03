import React,{useRef} from 'react'
import './Contact.scss'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r4ejx4h', 'template_w1pwl1p', form.current, '4dG9NdMvSbv4xI0sH')
      .then((result) => {
          console.log(result.text);
          document.getElementById('form').reset();
          alert("Your message has been delivered")
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contactcon'>
      <div className="conhead">GET IN TOUCH!</div>
      <div className="maincon">
        <div className="conleft">
          <div className="firsttext">
          Having shared my portfolio, I'm open to taking on freelance opportunities and actively exploring full-time job possibilities. If you're interested in working together, please reach out!
          </div>
          <div className="secondtext">
            
          Feel free to say hi or ask any questions; I'm available to chat, and I'll make sure to respond to your messages as quickly as I can. 
           
          </div>
          <div className="followus">
            <span>Connect with me on:-</span>
            <a target='_blank' href='https://www.linkedin.com/in/haisam-khurshid/'><BsLinkedin className='flwicn'/></a>
            <a target='_blank' href='https://github.com/haisamk18'><BsGithub  className='flwicn'/></a>
            <a target='_blank' href='https://www.instagram.com/haixsam/'><FaInstagramSquare  className='flwicn'/></a>
            
          </div>
        </div>
        <div className="conright">
            <form class="decor" id='form' ref={form} onSubmit={sendEmail}>
          <div class="form-left-decoration"></div>
          <div class="form-right-decoration"></div>
          <div class="circle"></div>
          <div class="form-inner">
            <h3>Email me</h3>
            <input type="text" placeholder="Name" name="user_name"/>
            <input type="email" placeholder="Email" name="user_email"/>
            <textarea placeholder="Message..." rows="5" name="message"></textarea>
            <button type="submit" value="Send">Submit</button>
            <div className='output'></div>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact