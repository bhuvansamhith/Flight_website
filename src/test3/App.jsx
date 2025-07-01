
import React from 'react';
import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import Navbar from './Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Account from './components/Account';
import Trips from './components/Trips';
import Footer from './components/Footer';

const App=()=>{
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Trips" element={<Trips/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
