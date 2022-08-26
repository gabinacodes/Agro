import React from 'react';
import Footer from '../component/Footer';
import Image from '../image/image';
import about from '../data/about'
import "../styles/about.scss"
import Header from '../component/Header';


function About() {
  return (
    <div>
        <Header/>
      <div>
       <div className='backdrop'>
        <h1>About us</h1>
        <div className='logo'>
            <img src={Image.home} alt="home"/>
            <p>About us</p>
        </div>
       </div>
       <div className='flexx'>
        <div className='div11'>
            <h2 >Our Story</h2>
            <h6>Who Are We?</h6>
            <p>AgroMech Company is an online based supplier of machines and equipments for agricultural and farming industry, We are dedicated to providing a first class service to all of our customers, both home and abroad, using experienced hauliers to ensure the highest quality service
               AgroMech is registered with the Corporate Affairs Commission of the Federal Republic of Nigeria, established under the Companies and Allied matters Act 1990
                AgroMech ensures the clearing of machine, certificate and paper works are completed to the highest standard. 
            </p>
        </div>
        <div className='mac'>
            <img src={Image.machinery} alt="logo"/>
            <h4>Machinery Provider</h4>
            <p>We provide a platform where you can hire various machines and equipments for both long and short term</p>
        </div>
       </div>
       <div className='why'>
        <h2>Why Choose Us </h2>
        <div className='star' >
            <img src={Image.line} alt="line"/>
            <img src={Image.star} alt="star"/>
            <img src={Image.line} alt="line"/>
        </div>
        <p> AgroMech is a First Class Provider of Agricultural Machineries and Equipments</p>
        <div className='mapping'>
        {
            about.map((e)=>{
              return(
               <div className='div13' key={e.img}>
                 <img src={e.img} alt = "logo"/>
                <h4 className="">{e.title}</h4>
                <p>{e.content}</p>
               </div>
              )
            })
          }
        </div>
       </div>
       <div>
       <div className='logos'>
      <img src={Image.john} alt="pics"/>
      <img src={Image.milk} alt="pics"/>
      <img src={Image.progressive} alt="pics"/>
      <img src={Image.farmlogo} alt="pics"/>
      <img src={Image.steyr} alt="pics"/>
      </div>
       </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
