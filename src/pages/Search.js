import React from 'react';
import Header from '../component/Header';
import { Link, Outlet } from 'react-router-dom';
import shop from '../data/shop';
function Search() {
  return (
    <div className='search'>
      <Header/>
      <div className='div3' style={{background:"#FFFDE6"}} >
        <h6 className='product' style={{margin:"0px"}}>Search Result</h6>
       <div className='grid' >
       {shop.map((e)=>{
            return(
             <div className='produce' key={e.id} >
              
              <img src={e.img} alt={e.title}/>
             <div> <h5 className='title'>{e.title}</h5>
              <p className='price'>{e.price}</p>
              <div>
               <button><Link to='/view'>View</Link></button>
               <button><Link to="/cart">Add Cart</Link></button>
             </div></div>
              </div>
             
            )
          })}
          <Outlet/>
       </div>
      </div>
    </div>
  );
}

export default Search;
