import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Styles from "../styles/modules/view.module.scss"
import Image from '../image/image';
function View() {
    var count = 1
    const minus=()=>{
      document.getElementById("one").innerHTML = count --
  
    }
    const plus=()=>{
      document.getElementById("one").innerHTML = count ++
  
    }
  return (
    <div>
      <Header/>
      <div className={Styles.bg}>
        <div  className={Styles.grid}>
        <div className={Styles.immg}>
            <img alt='img' src={Image.trac1}/>
            <div className='div_img'>
            <img alt='img' src={Image.trac1} className={Styles.img}/>
            <img alt='img' src={Image.trac2} className={Styles.img}/>
            <img alt='img' src={Image.trac3} className={Styles.img}/>
            <img alt='img' src={Image.trac4} className={Styles.img}/>
            </div>
        </div>
        <div className={Styles.colr}>
            <h3>5050E Utility Tractor </h3>
            <p>$32,000 </p>
            <div>
                  <img src={Image.starr} alt="star"/>
                  <img src={Image.starr} alt="star"/>
                  <img src={Image.starr} alt="star"/>
                  <img src={Image.starr} alt="star"/>
                  <img src={Image.starr} alt="star"/>
                </div>
            <div className={Styles.miniflex}>
                <div className={Styles.color}>
                    <p>Colours:</p>
                    <div className={Styles.miniflex} >
                        <div className={Styles.green}></div>
                        <div className={Styles.red}></div>
                        <div className={Styles.blue}></div>
                    </div>
                </div>
                <div >
                    <p>Quantity:</p>
                    <div className={Styles.quantity}>
                        <p onClick={minus}>-</p>
                        <p id='one'>1</p>
                        <p onClick={plus}>+</p>
                    </div>
                </div>
            </div>
            <div className={Styles.miniflex}>
                <img src={Image.ellipse} alt='img'/>
                <p> 2WD or MFWD </p>
            </div>
            <div className={Styles.miniflex}>
                <img alt='img'src={Image.ellipse}/>
                <p>5-Year power train warranty* </p>
            </div>
            <div className={Styles.miniflex}>
                <img alt='img'src={Image.ellipse}/>
                <p>Available in open operator system </p>
            </div>
            <div className={Styles.miniflex}>
                <img alt='img'src={Image.ellipse}/>
                <p>No Regen required </p>
            </div>
            <h4>Features </h4>
            <div className={Styles.miniflex}>
                <img alt='img'src={Image.ellipse}/>
                <p>Intuitive control to aide simple operation    </p>
            </div>
            <div className={Styles.miniflex}>
                <img alt='img'src={Image.ellipse}/>
                <p>An easy to use transmission which saves time and effort </p>
            </div>
            <div className={Styles.miniflex}>
                <img alt='img'src={Image.ellipse}/>
                <p>No Regen required with final tier 4- compliant PowerTech engines on 5E 3-Cylinders    </p>
            </div>
            <div className={Styles.btn}>
                <button className={Styles.btn1}>Add Cart</button>
                <button className={Styles.btn2}>Buy Now</button>
            </div>

        </div>
        </div>
        <div className={Styles.spec}>
            <h4>Specifications</h4>
            <div className={Styles.speci}>
            <div>
                <img alt='img'src={Image.ellipse}/>
                <p>Engine description	John Deere PowerTech™ 3029 EWR </p>
            </div>
            <div>
                <img alt='img'src={Image.ellipse}/>
                <p>Rated engine power	At 2100 rpm: 37.4 kW, 50 hp</p>
            </div>
            <div>
                <img alt='img'src={Image.ellipse}/>
                <p>Maximum PTO power	At 1800 rpm, OOS: 28.5 kW (38 PTO hp)</p>
            </div>
            <div>
                <img alt='img'src={Image.ellipse}/>
                <p>Hydraulic pump rated output	Standard: 68.8 L/min, 18.2 gpm</p>
            </div>
            <div>
                <img alt='img'src={Image.ellipse}/>
                <p>Engine displacement	3 cylinders: 2.9 L 179 cu in.</p>
            </div>
            <div>
                <img alt='img'src={Image.ellipse}/>
                <p>Rated PTO power (hp SAE)	At 2100 rpm: 27.6 kW (37 PTO hp)</p>
            </div>
            <div>
                <img alt='img'src={Image.ellipse}/>
                <p>Transmission type	Standard: SyncShuttle™ 9F/3R</p>
            </div>
            <div>
                <img alt='img'src={Image.ellipse}/>
                <p>Rear hitch category (SAE designation)	Category 2; convertible to 1</p>
            </div>
            
            </div>
        </div>
        <div>
            <h4>Related Products</h4>
            <div className={Styles.div_img}>   <div className={Styles.previous}>&#8249;</div>

        
           <div> <img alt='img' src={Image.trac1} className={Styles.ig}/>
           <p>5040E</p>
           <p>Utility Tractor </p></div>
          <div>
          <img alt='img' src={Image.trac2} className={Styles.img}/>
          <p>5270E</p>
           <p>Utility Tractor </p>
          </div>
           <div>
           <img alt='img' src={Image.trac3} className={Styles.img}/>
           <p>5560E</p>
           <p>Utility Tractor </p>
           </div>
            <div>
            <img alt='img' src={Image.trac4} className={Styles.img}/>
            <p>5561E</p>
           <p>Utility Tractor </p>
            </div>
         <div className={Styles.next}>&#8250;</div></div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default View;
