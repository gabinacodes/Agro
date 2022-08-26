import React, { useState } from 'react';
import Image from '../image/image'
import { Link, Outlet } from 'react-router-dom';
import Styles from   "../styles/modules/header.module.scss"
import  "../styles/Global.scss"

function Header() {
const [showLink, setShowLink] = useState(false)
const [shoLink, setShoLink] = useState(false)
const search =() =>{
 document.getElementsByClassName("search")[0].style.display = "block"

}
const home =()=>{
  document.getElementById("home").style.borderBottom = "2px solid white"
  document.getElementById("about").style.borderBottom = "none"
  document.getElementById("service").style.borderBottom = "none"
  document.getElementById("contact").style.borderBottom = "none"
  document.getElementById("hire").style.borderBottom = "none"
  document.getElementById("stock").style.borderBottom = "none"
  document.getElementById("gallery").style.borderBottom = "none"
  document.getElementById("part").style.borderBottom = "none"
  document.getElementById("faq").style.borderBottom = "none"
  document.getElementById("consult").style.borderBottom = "none"

}
const about =()=>{
  document.getElementById("about").style.borderBottom = "2px solid white"
  document.getElementById("home").style.borderBottom = "none"
  document.getElementById("service").style.borderBottom = "none"
  document.getElementById("contact").style.borderBottom = "none"
  document.getElementById("hire").style.borderBottom = "none"
  document.getElementById("stock").style.borderBottom = "none"
  document.getElementById("gallery").style.borderBottom = "none"
  document.getElementById("part").style.borderBottom = "none"
  document.getElementById("faq").style.borderBottom = "none"
  document.getElementById("consult").style.borderBottom = "none"

}
const contact =()=>{
  document.getElementById("contact").style.borderBottom = "2px solid white"
  document.getElementById("about").style.borderBottom = "none"
  document.getElementById("service").style.borderBottom = "none"
  document.getElementById("home").style.borderBottom = "none"
  document.getElementById("hire").style.borderBottom = "none"
  document.getElementById("stock").style.borderBottom = "none"
  document.getElementById("gallery").style.borderBottom = "none"
  document.getElementById("part").style.borderBottom = "none"
  document.getElementById("faq").style.borderBottom = "none"
  document.getElementById("consult").style.borderBottom = "none"

}
const service =()=>{
  document.getElementById("service").style.borderBottom = "2px solid white"
  document.getElementById("about").style.borderBottom = "none"
  document.getElementById("home").style.borderBottom = "none"
  document.getElementById("contact").style.borderBottom = "none"
  document.getElementById("hire").style.borderBottom = "none"
  document.getElementById("stock").style.borderBottom = "none"
  document.getElementById("gallery").style.borderBottom = "none"
  document.getElementById("part").style.borderBottom = "none"
  document.getElementById("faq").style.borderBottom = "none"
  document.getElementById("consult").style.borderBottom = "none"

}
const hire =()=>{
  document.getElementById("hire").style.borderBottom = "2px solid white"
  document.getElementById("about").style.borderBottom = "none"
  document.getElementById("service").style.borderBottom = "none"
  document.getElementById("contact").style.borderBottom = "none"
  document.getElementById("home").style.borderBottom = "none"
  document.getElementById("stock").style.borderBottom = "none"
  document.getElementById("gallery").style.borderBottom = "none"
  document.getElementById("part").style.borderBottom = "none"
  document.getElementById("faq").style.borderBottom = "none"
  document.getElementById("consult").style.borderBottom = "none"

}
const stock =()=>{
  document.getElementById("stock").style.borderBottom = "2px solid white"
  document.getElementById("about").style.borderBottom = "none"
  document.getElementById("service").style.borderBottom = "none"
  document.getElementById("contact").style.borderBottom = "none"
  document.getElementById("hire").style.borderBottom = "none"
  document.getElementById("home").style.borderBottom = "none"
  document.getElementById("gallery").style.borderBottom = "none"
  document.getElementById("part").style.borderBottom = "none"
  document.getElementById("faq").style.borderBottom = "none"
  document.getElementById("consult").style.borderBottom = "none"

}
const gallery =()=>{
  document.getElementById("gallery").style.borderBottom = "2px solid white"
  document.getElementById("about").style.borderBottom = "none"
  document.getElementById("service").style.borderBottom = "none"
  document.getElementById("contact").style.borderBottom = "none"
  document.getElementById("hire").style.borderBottom = "none"
  document.getElementById("stock").style.borderBottom = "none"
  document.getElementById("home").style.borderBottom = "none"
  document.getElementById("part").style.borderBottom = "none"
  document.getElementById("faq").style.borderBottom = "none"
  document.getElementById("consult").style.borderBottom = "none"

}
const part =()=>{
  document.getElementById("part").style.borderBottom = "2px solid white"
  document.getElementById("about").style.borderBottom = "none"
  document.getElementById("service").style.borderBottom = "none"
  document.getElementById("contact").style.borderBottom = "none"
  document.getElementById("hire").style.borderBottom = "none"
  document.getElementById("stock").style.borderBottom = "none"
  document.getElementById("gallery").style.borderBottom = "none"
  document.getElementById("home").style.borderBottom = "none"
  document.getElementById("faq").style.borderBottom = "none"
  document.getElementById("consult").style.borderBottom = "none"

}
const faq =()=>{
  document.getElementById("faq").style.borderBottom = "2px solid white"
  document.getElementById("about").style.borderBottom = "none"
  document.getElementById("service").style.borderBottom = "none"
  document.getElementById("contact").style.borderBottom = "none"
  document.getElementById("hire").style.borderBottom = "none"
  document.getElementById("stock").style.borderBottom = "none"
  document.getElementById("gallery").style.borderBottom = "none"
  document.getElementById("part").style.borderBottom = "none"
  document.getElementById("home").style.borderBottom = "none"
  document.getElementById("consult").style.borderBottom = "none"

}
const consult =()=>{
  document.getElementById("consult").style.borderBottom = "2px solid white"
  document.getElementById("about").style.borderBottom = "none"
  document.getElementById("service").style.borderBottom = "none"
  document.getElementById("contact").style.borderBottom = "none"
  document.getElementById("hire").style.borderBottom = "none"
  document.getElementById("stock").style.borderBottom = "none"
  document.getElementById("gallery").style.borderBottom = "none"
  document.getElementById("part").style.borderBottom = "none"
  document.getElementById("faq").style.borderBottom = "none"
  document.getElementById("home").style.borderBottom = "none"

}

  return (
    <div  className={Styles.header} id="header">
       <div  className={Styles.nav1}>
        <img src={Image.logo} className={Styles.logo} alt="logo"/>
        <img src={Image.hamburger} onClick={()=>setShoLink(!shoLink)} className={Styles.ham} alt="logo"/>
        <div className={Styles.input} id="input" >
       <input type="text" placeholder='search' onClick={search} />
     
        <button className={Styles.search}><Link to="/search">Search</Link></button>
       </div>
       <div className={ Styles.navv}onClick={()=>setShoLink(!shoLink)}>  
      <Link to="/profile">
      <div  className={Styles.nav}>
       <img src={Image.account} alt="logo"/>
       <p>Account</p>
       </div></Link>
       <div  className={Styles.nav}>
       <img src={Image.wishlist} alt="logo"/>
       <p>Wishlist</p>
       </div>
       <Link to="/cart">
       <div  className={Styles.nav}>
       <img src={Image.cart} alt="logo"/>
       <p>Cart</p>
       </div></Link>
       </div>

      </div> 
       <div className={Styles.n2}> <img src={Image.hamburgerW}  className={Styles.ham1}  onClick={()=>setShowLink(!showLink)}  alt="logo"/></div>
      <div className={Styles.nav2 } id={showLink ? "hidden" :  ""}>
    <Link to="/home"  id='home'   onClick={home}>Home</Link>
        <Link to='/about' id='about' onClick={about}> About Us</Link>
        <Link to='/service'  id='service'  onClick={service}>Services </Link>
        <Link to='/home'  id='stock'  onClick={stock}>Stock</Link>
        <Link to='/home'  id='hire'  onClick={hire}>Hire </Link>
        <Link to='/gallery'  id='gallery'  onClick={gallery}>Gallery</Link>
        <Link to='/consultation'  id='consult'  onClick={consult}>Consultation</Link>
        <Link to='/maintenance' id='part'  onClick={part}>Parts & Maintenance </Link>
        <Link to='/faq' id='faq'  onClick={faq}>FAQs</Link>
        <Link to='/contact'  id='contact'  onClick={contact}>Contact Us</Link>
      </div>
      <Outlet/>
    </div>
  );
}

export default Header;
