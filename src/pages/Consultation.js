import React, { useState } from 'react';
import Header from '../component/Header'
import Footer from '../component/Footer';
import Image from '../image/image';
import '../styles/conultation.scss'

function Consultation() {
  const [Modal, setModal] = useState(false)
  return (
    <div>
      <Header/>
      <div>
         <div className='bdrop'>
        <h1>Consultation</h1>
        <div className='logo'>
            <img src={Image.home} alt="home"/>
            <p>Consultation</p>
        </div>
       </div>
        <div className='div31'>
          <h3>For Consultation</h3>
          <p>We are always looking forward to give the best products and services, Our round the clock customer service agents ensures smooth shopping experience</p>
          <button  onClick={()=>setModal(!Modal)}>Contact Us</button>
        </div>
        <div className='logos'>
      <img src={Image.john} alt="pics"/>
      <img src={Image.milk} alt="pics"/>
      <img src={Image.progressive} alt="pics"/>
      <img src={Image.farmlogo} alt="pics"/>
      <img src={Image.steyr} alt="pics"/>
      </div>
       <div  className="doe" id={Modal ? "modal" : ""} >
          <div className='close'>
            <img src={Image.logo2} alt="logo"/>
            <img src={Image.close} onClick={()=>setModal(!Modal)} alt="logo"/>
          </div>
          <h6>Complete the form or email agromech@gmail.com</h6>
          <div>
          <form className='form'>
          <label> Name:</label>
          <input type="text"/>
          <label >Email Address</label>
          <input type="text"/>
          <label >Phone Number</label>
          <input type="text"/>
          <label >Compose Message</label>
          <input type="text"/>
          </form>
          <button className='compose'>Compose Message</button>
          </div>
          <div className='find'>
            <p>Find Us </p>
            <div className='medias'>
            <div  className='ocial' >
            <img  src={Image.tweetw}alt='logo'/>
            <img src={Image.facew} alt='logo'/>
            <img src={Image.instagw} alt='logo'/>
          </div>
             <div className='phone'>       
             <img src={Image.location} alt="tel"/>
             <p>Global</p>
            </div>
          <div className='phone'>
        <img src={Image.phone2} alt="tel"/>
        <p>+1 575 567 5673</p>
      </div>
      <div  className="phone">
      <img src={Image.mail2} alt="tel"/>
        <p>agromech@gmail.com</p>
      </div></div>
          </div>
       </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Consultation;
