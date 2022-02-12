import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {  Routes , Route} from 'react-router-dom'
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import ContactUs from './components/Pages/ContactUs';
import SignUp from './components/Pages/SignUp';
import Marketing from './components/Pages/Marketing';
import Consultimg from './components/Pages/Consultimg';


const App = () => {
  return (
    <main>
       <Navbar />
       <Routes>
       <Route exact path="/" element={<Home />} /> 
       <Route exact path="/services" element={<Services />} /> 
       <Route exact path="/products" element={<Products  />} /> 
       <Route exact path="/contact-us" element={<ContactUs />} /> 
       <Route exact path="/sign-up" element={<SignUp />} /> 
       <Route exact path="/marketing" element={<Marketing />} /> 
       <Route exact path="/consulting" element={<Consultimg />} /> 
       </Routes>
     </main>
   
  )
}

export default App;

