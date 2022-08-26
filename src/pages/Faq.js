import React, { useState} from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Image from '../image/image';
import faq from '../data/faq';
import '../styles/faq.scss'
function Faq() {
    const [answer, setAnswer] = useState(false)
  return (
    <div>
      <Header/>
      <div className='faq'>
        <img src={Image.faq} alt="img"/>
        <p>Have questions? We’re here to help</p>
        <input placeholder='search' type="text"/>
        <div className='bg'>
            <div>
            {faq.map((e)=>{
            return(
             <div className='duce' key={e.title} >
              <div>
              <h5 className='le'>{e.title}</h5>
              <p className='ice' id={answer ? "ice" :  ""}>{e.content}</p>
              </div>
             <div>
                <img src={Image.plus} alt="plus" onClick={()=>setAnswer(!answer)} />
             </div>
              </div>
            )
          })}
            </div>
            <h5>Still have Questions?</h5>
            <p>Can’t find the answer you are looking for? Talk to our friendly team</p>
           <div>
            <img src={Image.person2} alt='group'/>
            <img src={Image.person02} alt='group'/>
            <img src={Image.person3} alt='group'/>
           </div>
        </div>
      </div>
      <div className='logos'>
      <img src={Image.john} alt="pics"/>
      <img src={Image.milk} alt="pics"/>
      <img src={Image.progressive} alt="pics"/>
      <img src={Image.farmlogo} alt="pics"/>
      <img src={Image.steyr} alt="pics"/>
      </div>
      <Footer/>
    </div>
  );
}

export default Faq;
