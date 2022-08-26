import Header from '../component/Header'
import Image from '../image/image';
import Footer from '../component/Footer'
import provider from '../data/provider'
import shop from '../data/shop';
import mobilesp from '../data/mobilesp'
import  '../styles/home.scss'
import { Link, Outlet } from 'react-router-dom';
function Home() {
  return (
    <>
     <Header/>
     <div className="home">
      <div>
        <img src={Image.pexels} className="pics" alt="pics"/>
      </div>
      <div className='logos'>
      <img src={Image.john} alt="pics"/>
      <img src={Image.milk} alt="pics"/>
      <img src={Image.progressive} alt="pics"/>
      <img src={Image.farmlogo} alt="pics"/>
      <img src={Image.steyr} alt="pics"/>
      </div>
      <div className='div1'>
        <div>
          <h6 className='h6'>What we offer</h6>
        </div>
        <div className='content'>
          <h5 className='coass'>First Class Provider of Agricultural Machineries</h5>
          <p>AgroMech Company is an online based supplier of machines and equipments for agricultural and farming industry, We are dedicated to providing a first class service to all of our customers.</p>
        </div>
        <div className='procider'>
        {
            provider.map((e)=>{
              return(
               <div className='div2' key={e.id}>
                 <img src={e.img} alt = "logo"/>
                <h4 className="">{e.title}</h4>
                <p>{e.content}</p>
               </div>
              )
            })
          }
        </div>
      </div>
      <div className='div3' >
        <h6 className='product'>Featured Products</h6>
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
       </div>
      </div>
      <div className='div4' >
        <h6 className='features'>Featured Products</h6>
       <div className='gri' >
       {mobilesp.map((e)=>{
            return(
             <div className='pruce' key={e.id} >
              
              <img src={e.img} alt={e.title}/>
             <div> <h5 className='tile'>{e.title}</h5>
              <p className='rice'>{e.price}</p>
              <div>
               <button><Link to='/view'>View</Link></button>
               <button ><Link to="/cart">Add Cart</Link></button>
             </div></div>
              </div>
             
            )
          })}
           <Outlet/>
       </div>
      </div>
     </div>
     <Footer/>
    </>
  );
}

export default Home;
