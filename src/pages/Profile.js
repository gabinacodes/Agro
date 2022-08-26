import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Image from '../image/image';
import Header from '../component/Header';
import '../styles/profile.scss'



function Profile() {
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  
 const profile = ()=> {
     document.getElementById('set').style.display ="block";
     document.getElementsByClassName('message_box')[0].style.display="none";
     document.getElementsByClassName('message_box')[1].style.display="none";
     document.getElementsByClassName('message_box')[2].style.display="none";
     document.getElementById('pro').style.color = "white";
     document.getElementById('pro').style.backgroundColor = "#217c2c";
     document.getElementById('pro').style.borderRadius = "3px";
     document.getElementById('pro').style.margin = "0 -1%";
     document.getElementsByClassName('imgg')[1].style.color = "black";
     document.getElementsByClassName('imgg')[1].style.backgroundColor = "white";
     document.getElementsByClassName('imgg')[2].style.color = "black";
     document.getElementsByClassName('imgg')[2].style.backgroundColor = "white";
     document.getElementsByClassName('imgg')[3].style.color = "black";
     document.getElementsByClassName('imgg')[3].style.backgroundColor = "white";
     document.getElementsByClassName('imgg')[4].style.color = "black";
     document.getElementsByClassName('imgg')[4].style.backgroundColor = "white";
 }
 const inbox = ()=> {
  document.getElementById('set').style.display ="none";
  document.getElementsByClassName('message_box')[0].style.display="block";
  document.getElementsByClassName('message_box')[1].style.display="none";
  document.getElementsByClassName('message_box')[2].style.display="none";
  document.getElementsByClassName('imgg')[2].style.color = "white";
  document.getElementsByClassName('imgg')[2].style.backgroundColor = "#217c2c";
  document.getElementsByClassName('imgg')[2].style.borderRadius = "3px";
  document.getElementsByClassName('imgg')[2].style.margin = "0 -1%";
  document.getElementById('pro').style.backgroundColor = "white";
  document.getElementById('pro').style.color = "black";
  document.getElementsByClassName('imgg')[1].style.color = "black";
  document.getElementsByClassName('imgg')[1].style.backgroundColor = "white";
  document.getElementsByClassName('imgg')[3].style.color = "black";
  document.getElementsByClassName('imgg')[3].style.backgroundColor = "white";
  document.getElementsByClassName('imgg')[4].style.color = "black";
  document.getElementsByClassName('imgg')[4].style.backgroundColor = "white";
}
const order = ()=> {
  document.getElementById('set').style.display ="none";
  document.getElementsByClassName('message_box')[0].style.display="none";
  document.getElementsByClassName('message_box')[1].style.display="none";
  document.getElementsByClassName('message_box')[2].style.display="none";
  document.getElementsByClassName('imgg')[1].style.color = "white";
  document.getElementsByClassName('imgg')[1].style.backgroundColor = "#217c2c";
  document.getElementsByClassName('imgg')[1].style.borderRadius = "3px";
  document.getElementsByClassName('imgg')[1].style.margin = "0 -1%";
  document.getElementById('pro').style.backgroundColor = "white";
  document.getElementById('pro').style.color = "black";
  document.getElementsByClassName('imgg')[2].style.color = "black";
  document.getElementsByClassName('imgg')[2].style.backgroundColor = "white";
  document.getElementsByClassName('imgg')[3].style.color = "black";
  document.getElementsByClassName('imgg')[3].style.backgroundColor = "white";
  document.getElementsByClassName('imgg')[4].style.color = "black";
  document.getElementsByClassName('imgg')[4].style.backgroundColor = "white";
}
const password =() =>{
  document.getElementById('set').style.display ="none";
  document.getElementsByClassName('message_box')[0].style.display="none";
  document.getElementsByClassName('message_box')[1].style.display="none";
  document.getElementsByClassName('message_box')[2].style.display="block";
  document.getElementsByClassName('imgg')[3].style.color = "white";
  document.getElementsByClassName('imgg')[3].style.backgroundColor = "#217c2c";
  document.getElementsByClassName('imgg')[3].style.borderRadius = "3px";
  document.getElementsByClassName('imgg')[3].style.margin = "0 -1%";
  document.getElementById('pro').style.backgroundColor = "white";
  document.getElementById('pro').style.color = "black";
  document.getElementsByClassName('imgg')[2].style.color = "black";
  document.getElementsByClassName('imgg')[2].style.backgroundColor = "white";
  document.getElementsByClassName('imgg')[4].style.color = "black";
  document.getElementsByClassName('imgg')[4].style.backgroundColor = "white";
}
const news =() =>{
  document.getElementById('set').style.display ="none";
  document.getElementsByClassName('message_box')[0].style.display="none";
  document.getElementsByClassName('message_box')[1].style.display="block";
  document.getElementsByClassName('message_box')[2].style.display="none";
  document.getElementsByClassName('imgg')[4].style.color = "white";
  document.getElementsByClassName('imgg')[4].style.backgroundColor = "#217c2c";
  document.getElementsByClassName('imgg')[4].style.borderRadius = "3px";
  document.getElementsByClassName('imgg')[4].style.margin = "0 -1%";
  document.getElementById('pro').style.backgroundColor = "white";
  document.getElementById('pro').style.color = "black";
  document.getElementsByClassName('imgg')[2].style.color = "black";
  document.getElementsByClassName('imgg')[2].style.backgroundColor = "white";
  document.getElementsByClassName('imgg')[3].style.color = "black";
  document.getElementsByClassName('imgg')[3].style.backgroundColor = "white";
}
const save =()=>{
  var nam = ""
  var name = ""
    nam = document.getElementById("inPut").value
    name = document.getElementById("inPUt").value
    document.getElementById("best").innerHTML = nam +" "+ name ;
    document.getElementById("best").style.fontSize = "24px"
    document.getElementById("best").style.textAlign = "center"
    document.getElementById("best").style.fontWeight = "600"
 
}
  return (
    <div>
      <Header/>
      <div className='static'>
      <div>
     <div className='navbar'>
        <input type="file" id='file' onChange={handleChange} />
        <img className='picture' id='pics'  src={file} alt="add img"/>
        <label for="file" id='select' ><img src={Image.select} alt="img"/></label>
        <p id='best'></p>
        <div className='imgg'id='pro' onClick={profile} >
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  className='path' d="M10 0.0769043C11.3261 0.0769043 12.5979 0.603688 13.5355 1.54137C14.4732 2.47905 15 3.75082 15 5.0769C15 6.40299 14.4732 7.67476 13.5355 8.61244C12.5979 9.55012 11.3261 10.0769 10 10.0769C8.67392 10.0769 7.40215 9.55012 6.46447 8.61244C5.52678 7.67476 5 6.40299 5 5.0769C5 3.75082 5.52678 2.47905 6.46447 1.54137C7.40215 0.603688 8.67392 0.0769043 10 0.0769043ZM10 12.5769C15.525 12.5769 20 14.8144 20 17.5769V20.0769H0V17.5769C0 14.8144 4.475 12.5769 10 12.5769Z" fill="#217C2C"/>
       </svg>

        <p> Profile</p>
        </div>
        <div className='imgg' onClick={order}>
        <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.25 14C12.8 14 10 16.8 10 20.25C10 23.7 12.8 26.5 16.25 26.5C19.7 26.5 22.5 23.7 22.5 20.25C22.5 16.8 19.7 14 16.25 14ZM18.3125 23.1875L15.625 20.5V16.5H16.875V19.9875L19.1875 22.3L18.3125 23.1875ZM20 2.75H13.525C13 1.3 11.625 0.25 10 0.25C8.375 0.25 7 1.3 6.475 2.75H0V26.5H10.1375C9.39797 25.7822 8.79635 24.9348 8.3625 24H2.5V5.25H5V9H15V5.25H17.5V11.6C18.3875 11.725 19.225 11.9875 20 12.35V2.75ZM10 5.25C9.3125 5.25 8.75 4.6875 8.75 4C8.75 3.3125 9.3125 2.75 10 2.75C10.6875 2.75 11.25 3.3125 11.25 4C11.25 4.6875 10.6875 5.25 10 5.25Z" fill="#217C2C"/>
</svg>
         <p>Order</p>
        </div>
        <div className='imgg'  onClick={inbox}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.666 10.9V22.2583L20.5327 16.125L19.3577 17.3L25.3827 23.3333H4.71602L10.5493 17.3L9.34935 16.1417L3.33268 22.3667V7.93333L13.691 18.2417C14.0033 18.5521 14.4257 18.7263 14.866 18.7263C15.3063 18.7263 15.7287 18.5521 16.041 18.2417L23.3993 10.925C22.8121 10.7717 22.2506 10.5331 21.7327 10.2167L14.8493 17.0583L4.42435 6.66667H19.0077C18.8466 6.12536 18.7597 5.56468 18.7493 5H3.33268C2.89065 5 2.46673 5.17559 2.15417 5.48816C1.84161 5.80072 1.66602 6.22464 1.66602 6.66667V23.3333C1.66602 23.7754 1.84161 24.1993 2.15417 24.5118C2.46673 24.8244 2.89065 25 3.33268 25H26.666C27.108 25 27.532 24.8244 27.8445 24.5118C28.1571 24.1993 28.3327 23.7754 28.3327 23.3333V10.1667C27.8162 10.4917 27.2546 10.7388 26.666 10.9Z" fill="#217C2C"/>
        <path d="M25.0007 9.05001C27.3018 9.05001 29.1673 7.18453 29.1673 4.88334C29.1673 2.58215 27.3018 0.716675 25.0007 0.716675C22.6995 0.716675 20.834 2.58215 20.834 4.88334C20.834 7.18453 22.6995 9.05001 25.0007 9.05001Z" fill="#217C2C"/>
        </svg>
         <p>Notifications</p>
        </div>
        <div className='imgg'  onClick={password}>
        <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M19.5 9H22C22.3315 9 22.6495 9.1317 22.8839 9.36612C23.1183 9.60054 23.25 9.91848 23.25 10.25V25.25C23.25 25.5815 23.1183 25.8995 22.8839 26.1339C22.6495 26.3683 22.3315 26.5 22 26.5H2C1.66848 26.5 1.35054 26.3683 1.11612 26.1339C0.881696 25.8995 0.75 25.5815 0.75 25.25V10.25C0.75 9.91848 0.881696 9.60054 1.11612 9.36612C1.35054 9.1317 1.66848 9 2 9H4.5V7.75C4.5 5.76088 5.29018 3.85322 6.6967 2.4467C8.10322 1.04018 10.0109 0.25 12 0.25C13.9891 0.25 15.8968 1.04018 17.3033 2.4467C18.7098 3.85322 19.5 5.76088 19.5 7.75V9ZM3.25 11.5V24H20.75V11.5H3.25ZM10.75 16.5H13.25V19H10.75V16.5ZM5.75 16.5H8.25V19H5.75V16.5ZM15.75 16.5H18.25V19H15.75V16.5ZM17 9V7.75C17 6.42392 16.4732 5.15215 15.5355 4.21447C14.5979 3.27678 13.3261 2.75 12 2.75C10.6739 2.75 9.40215 3.27678 8.46447 4.21447C7.52678 5.15215 7 6.42392 7 7.75V9H17Z" fill="#217C2C"/>
        </svg>
   
          <p>Change Password</p>
        </div>
        <div className='imgg' onClick={news}>
        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 0.25H23C23.663 0.25 24.2989 0.513392 24.7678 0.982233C25.2366 1.45107 25.5 2.08696 25.5 2.75V15.25C25.5 15.913 25.2366 16.5489 24.7678 17.0178C24.2989 17.4866 23.663 17.75 23 17.75H3C2.33696 17.75 1.70107 17.4866 1.23223 17.0178C0.763392 16.5489 0.5 15.913 0.5 15.25V2.75C0.5 2.08696 0.763392 1.45107 1.23223 0.982233C1.70107 0.513392 2.33696 0.25 3 0.25V0.25ZM3 2.75V15.25H23V2.75H3ZM6.75 10.25H14.25C14.5815 10.25 14.8995 10.3817 15.1339 10.6161C15.3683 10.8505 15.5 11.1685 15.5 11.5C15.5 11.8315 15.3683 12.1495 15.1339 12.3839C14.8995 12.6183 14.5815 12.75 14.25 12.75H6.75C6.41848 12.75 6.10054 12.6183 5.86612 12.3839C5.6317 12.1495 5.5 11.8315 5.5 11.5C5.5 11.1685 5.6317 10.8505 5.86612 10.6161C6.10054 10.3817 6.41848 10.25 6.75 10.25ZM19.25 4H21.75V6.5H19.25V4Z" fill="#217C2C"/>
       </svg>
        <p>Newsletter Preferences </p>
        </div>
      </div >
       <button className='btnn'><Link className='link' to="/">
      <img src={Image.logout} alt="img"/>
      <p>Log out</p>
      </Link></button>
     </div>
      <div className='setting' id='set' >
         <h3> Profile Settings </h3>
         <div>
        <div>
        <label for="text"  >First Name</label><br/>
          <input type="text" placeholder="Simon" id='inPut'/>
        </div>
         <div> <label for="text"  >Last Name</label><br/>
          <input type="text" placeholder="Daniel" id='inPUt'/></div>
         <div> <label for="text"   >Email</label><br/>
          <input type="text" placeholder="Simondaniel159@gmail.com "/></div>
         <div> <label for="text"  >Phone Number </label><br/>
          <input type="phone" placeholder="+2349064556443"/></div>
         <div> <label for="text"  >Home Address 1</label><br/>
          <input type="text" placeholder="Home address "/></div>
          <div><label for="text"  >Home Address 2</label><br/>
          <input type="text" placeholder="Address"/></div>
          <div><label >Country</label><br/>
          <input type="text" placeholder="France "/></div>
         <div> <label for="text"  >Postal Code </label><br/>
          <input type="text" placeholder="110434"/></div>
          <div><label for="text"  >City </label><br/>
          <input type="text" placeholder="Nancy "/></div>
         <div> <label for="text" >State</label><br/>
          <input type="text" placeholder="Lorraine"/></div>
         
         </div>
         <button className='save' onClick={save}>Save Changes</button>
      </div>
      <div className='message_box'>
        <div className='inbox'>
          <h1>Inbox Messages  </h1>
        </div>
      <div className='radio'>
      <div>
          <input type="radio" value="push"/>
          <label for="radio"  name="fav_language">Recieve push notifications </label>
        </div>
        <div className='message'>
          <img alt='img' src={Image.inbox}/>
          <p>You don’t have any messages </p>
          <p>Here you will be able to see all the messages we send you, stay tuned</p>
        </div>
      </div>
      </div>
      <div className='message_box'>
        <div className='inbox'>
          <h1>Newsletter Preferences  </h1>
        </div>
        <div className='radio'  name="fav_language"> 
          <p>SUBSCRIBE TO</p>
          <div className='line'></div>
          <div className='form1'>
          <input type="radio"  name="fav_language"/>
          <label for="radio"  name="fav_language">Daily Newsletter </label><br/>
          <input type="radio" name="fav_language" />
          <label for="radio">Weekly Newsletter </label><br/>
          <input type="radio"  name="fav_language"/>
          <label for="radio">I don’t want to receive notifications from newsletter </label>
          </div>
          <button className='btn23'>SAVE</button>
          <button className='btn24'>UNSUBSCRIBE FROM NEWSLETTER</button>
        </div>
      </div>
      <div className='message_box'>
        <div className='inbox'>
          <h1>Change Password</h1>
        </div>
        <div className='radio'>
          <input className='innput'  placeholder='Current Password'/><br/>
          <input className='innput'  placeholder='New Password'/><br/>
          <input  className='innput' placeholder='Confirm Password'/><br/>

        </div>
      </div>
      </div>
    </div>
  );
}

export default Profile;
