import React from 'react';
import Image from '../image/image';
import '../styles/account.scss'
function signup() {
  const myFunction=() =>{
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
    const myFuntion=() =>{
      var x = document.getElementById("mynput");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }
  return (
    <div>
         <div className='mdule'>
      <img src={Image.logo} alt=''/>
      <p className='welcome'>Create Account</p>
      <div>
        <label>Email Address</label>
        <input type="text" placeholder='Enter your email'/>
        <label>Password</label>
        <input type="password" id='mynput' placeholder='********************'/>
        <label>Confirm Password</label>
        <input type="password"id='myInput'  placeholder='********************'/>
       
        <img src={Image.eye} alt='img' onClick={myFuntion} className='pass'/>
        <img src={Image.eye} alt='img' onClick={myFunction} className='word'/>
        <button ><a href='/home'>Signup</a></button>
        <img src={Image.or} alt="or" className='or'/>
        <div className='dias'>
         <div> <img src={Image.google} alt='logo'/></div>
         <div> <img src={Image.facebok} alt='logo'/></div>
        </div>
        
      </div>
      <p className='p'>Already have an account yet?<a href='/'> Sign in</a></p>
      </div>
    <div className='ogin'>
     
    </div>
  </div>
  );
}

export default signup;
