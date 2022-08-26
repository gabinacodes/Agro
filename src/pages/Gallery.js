import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import gallery from '../data/gallery';
import '../styles/gallery.scss'
import Image from '../image/image';
function Gallery() {
  return (
    <div>
      <Header/>
     <div className='div21'>
     <h1>Image Gallery</h1>
        <div className='logo'>
            <img src={Image.home} alt="home"/>
            <p>Gallery</p>
        </div>
     </div>
      <div className='div20'>
      {
           gallery.map((e)=>{
              return(
               <div  key={e.id}>
                 <img src={e.img} alt = "logo"/>
                
               </div>
              )
            })
          } 
      </div>
      <div className='button'>
      <div className="previous">&laquo;</div>
      <div className="next">&raquo;</div>
      </div>
   
      <Footer/>
    </div>
  );
}

export default Gallery;
