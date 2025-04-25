// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import About from './pages/About';
import Login from './components/Login';
import Registration from './components/Registration';
import Donate from './pages/Donate';
import Charities from './pages/Charities';
import ContactUs from './pages/ContactUs';


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/donate' element={<Donate />} />
                <Route path='/charities' element={<Charities />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;