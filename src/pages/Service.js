import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import service from '../data/service'
import Image from '../image/image';
import "../styles/service.scss"
function Service() {
  return (
    <div>
      <Header/>
      <div>
      <div className='bacdrop'>
        <h1> Our Service</h1>
        <div className='ogo'>
            <img src={Image.home} alt="home"/>
            <p>Our Service</p>
        </div>
        </div>
        <div className='service'>
        {
            service.map((e)=>{
              return(
               <div className='dv13' key={e.title}>
                 <img src={e.img} alt = "logo"/>
                <h4 className="">{e.title}</h4>
                <p>{e.content}</p>
               </div>
              )
            })
          }
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

export default Service;
