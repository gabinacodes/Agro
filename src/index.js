import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Service from './pages/Service'
import Gallery from './pages/Gallery'
import Consultation from './pages/Consultation'
import Maintenance from './pages/Maintain'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Faq from './pages/Faq'
import Account from './pages/Account'
import Cart from "./pages/Cart"
import View from './pages/View'
import Search from './pages/Search'
import './styles/Global.scss'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
          <Route path="/" element={<Account/>}></Route>
          <Route path="view" element={<View />} /> 
          <Route path="search" element={<Search />} /> 
          <Route path="home" element={<Home />} /> 
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
          <Route path="signup" element={<Signup/>}/>
          
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
