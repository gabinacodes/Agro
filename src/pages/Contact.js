import Header from "../component/Header";
import Footer from "../component/Footer";
import React from 'react';
import Image from "../image/image";
import "../styles/service.scss"

function Contact() {
  return (
    <div>
      <Header/>
      <div>
      <div className='bd'>
     <h1>Contact Us</h1>
        <div className='logo'>
            <img src={Image.home} alt="home"/>
            <p>Contact Us</p>
        </div>
     </div>
        <div className="div53"></div>
        <div className="div52">
            <div className="div51">
                <h3>Send us a Message </h3>
                <img src={Image.mail} alt='mail'/>
            </div>
            <form className='contact'>
          <label> Name:</label><br/>
         <div>
         <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
         </div>
          <label >Email</label><br/>
          <input type="text" placeholder="example@gmail.com"/>
          <label >Phone</label>
          <input type="text" placeholder="+234 90674748883"/>
          <label >Group or Company</label>
          <input type="text"/>
          <label >How can we help?</label>
          <input type="text" className="div55"/>
          <button>Submit</button>
          </form>
        </div>
        <div className='logos'>
      <img src={Image.john} alt="pics"/>
      <img src={Image.milk} alt="pics"/>
      <img src={Image.progressive} alt="pics"/>
      <img src={Image.farmlogo} alt="pics"/>
      <img src={Image.steyr} alt="pics"/>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
