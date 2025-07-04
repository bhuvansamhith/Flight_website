import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import View from './components/View';
import Book from './components/Book';
import Confirm from './components/Confirm';

import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Account from './components/Account';
import Trips from './components/Trips';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/View" element={<View />} />
        <Route path="/book" element={<Book />} />
        <Route path="/Confirm" element={<Confirm />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
