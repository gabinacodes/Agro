import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Image from '../image/image';
import maintain from '../data/maintain';
import '../styles/maintain.scss'

function Maintain() {
  return (
    <div>
      <Header/>
      <div>
      <div className='maintain'>
      <h1>Parts and Maintenance</h1>
        <div className='logo'>
            <img src={Image.home} alt="home"/>
            <p>Parts and Maintenance</p>
            </div>
      </div>
      <div className='logos'>
      <img src={Image.john} alt="pics"/>
      <img src={Image.milk} alt="pics"/>
      <img src={Image.progressive} alt="pics"/>
      <img src={Image.farmlogo} alt="pics"/>
      <img src={Image.steyr} alt="pics"/>
      </div>
      <div className='div41'>
        <div className='point'>
            <img src={Image.pin} alt="pin" className='pin'/>
            <h3>Great Valued Customer’s Relationship</h3>
            <p>When a customer purchases a product from us, that is the start of the relationship, not the end of it. We pride ourselves on delivering the best services possible, and on all our staff knowing exactly how these machines and equipments work, so whenever a customer has a question about any of these machines and equipments, they know they are speaking to someone to someone who can answer it. 
               Our team of service engineers are trained to the highest technical level and we work closely with customers to ensure that planned maintenance is undertaken in the most convenient and effective way. In an unlikely of an unexpected repair or breakdown, we will endeavour to have the machines back up and running in the quickest time possible. 
               Our team’s dedication and support has won them numerous national customer care awards.</p>
           <button>GET SUPPORT NOW</button>
        </div>
        <div className='div43'>
            <div className='rectangle'></div>
            <img src={Image.absolute} className='box' alt="pin"/>
            <div className='relative'></div>
        </div>
      </div>
      <div>
        <h1 className='product'>Featured Products</h1>
     <div className='main'>
     {maintain.map((e)=>{
            return(
             <div className='feature'  key={e.id} >
              
              <img src={e.img} alt={e.title}/>
             <div> <h5 className=''>{e.title}</h5>
              <div>
                <p className=''>{e.price}</p>
                <div>
                  <img src={Image.starr} alt="star"/>
                  <img src={Image.starr} alt="star"/>
                  <img src={Image.starr} alt="star"/>
                  <img src={Image.starr} alt="star"/>
                  <img src={Image.starr} alt="star"/>
                </div>
              </div>
              <div>
               <button>View</button>
               <button>Add Cart</button>
             </div></div>
              </div>
             
            )
          })}
     </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Maintain;
