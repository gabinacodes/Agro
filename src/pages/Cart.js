import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Image from '../image/image';
import Styles from "../styles/modules/view.module.scss"
import cart from '../data/cart'

function Cart() {
  const [delet, setDelet] = useState(true) 
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
      <div className={Styles.bgn}>
        <div className={Styles.shop}>
          <p className={Styles.ava}>Shopping Cart (3)</p>
          <div  className={Styles.sop}  id={delet ? "show" :  ""}>
            <div>
              <img alt='img' src={Image.trac2}/>
            </div>
            
            <div className={Styles.utility}>
              <h6>5050E Utility Tractor </h6>
              <div className={Styles.flex} onClick={()=>setDelet(!delet)}>
                <img src={Image.bin} alt="delete" />
                <p className={Styles.remove}>REMOVE</p>
              </div>
            </div>
            <div className={Styles.utility}>
              <p>$50,000</p>
              <div className={Styles.quantity} style={{background:"none"}}>
                        <p className={Styles.minus} id="minus" onClick={minus}>-</p>
                        <p id='one'>1</p>
                        <p className={Styles.minus} id="plus"  onClick={plus}>+</p>
                    </div>
            
            </div>
          </div>
        </div>
        <div className={Styles.ship}>

          <h5 className={Styles.ava}>Available Shipping Method</h5>
          {
            cart.map((e)=>{
              return(
               <div className={Styles.div2} key={e.img}>
                 <img src={e.img} alt = "logo"/>
                  <div>
                    <p  className={Styles.p}>{e.title}</p>
                    <p className={Styles.dura}>{e.duration}</p>
                  </div>
                  <div className={Styles.flex}>
                    <p  className={Styles.p} onClick={()=>{
                      document.getElementById("shipping").innerHTML= e.price
                    }}>{e.price}</p>
                    <input type="radio"  name="fav_language"/>
                  </div>
               </div>
              )
            })
          }
            <div>
          <div className={Styles.ava}>
            <p>Order Summary</p>
            <div style={{display:"flex",justifyContent:"space-between"}}><p>Subtotal </p>
            <p>$50,000</p></div>
            <div  style={{display:"flex",justifyContent:"space-between"}}><p>Shipping  </p>
            <p id='shipping'>$3000</p></div>
          </div>
          <div className={Styles.ava}>
          <div  style={{display:"flex",justifyContent:"space-between"}}><p>Total </p>
            <p> $53000</p></div>
            <button className={Styles.btn1} id={Styles.btn}>CheckOut ($53000)</button>
          </div>
        </div>
        </div>
      
      </div>
      <Footer/>
    </div>
  );
}

export default Cart;
