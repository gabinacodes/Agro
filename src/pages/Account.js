import React from 'react';
import Image from '../image/image';
import '../styles/account.scss'
import { Link, Outlet } from 'react-router-dom';
function Account() {

  const myFunction=() =>{
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (
    <div className='login'>
      <div>
        <div className='module'>
        <img src={Image.logo} alt=''/>
        <p className='welcome'>Welcome Back</p>
        <div>
          <label>Email Address</label>
          <input type="text" placeholder='Enter your email'/>
          <label>Password</label>
          <input type="password" id='myInput' placeholder='********************'/>
          <img src={Image.eye} alt='img' className='password' onClick={myFunction}/>
          <button ><Link to='/home'>Login </Link></button>
          <img src={Image.or} alt="or" className='or'/>
          <div className='dias'>
           <div> <img src={Image.google} alt='logo'/></div>
           <div> <img src={Image.facebok} alt='logo'/></div>
          </div>
          
        </div>
        <p className='p'>Don’t have an account yet?<Link to='/signup'> Signup</Link></p>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}

export default Account;
