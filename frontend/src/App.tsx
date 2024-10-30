import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeMain from './pages/home/HomeMain';
import ServiceMain from './pages/services/ServiceMain';
import Login from './components/Login';
import AboutMain from './pages/aboutus/AboutMain';
import Testing from './components/Testing';


function App() {

    const location = useLocation(); // Get the current route

    return (
        <>
            {/* <Navbar/> */}
            {location.pathname !== '/login' && <Navbar />}
            <Routes>
                <Route path='/' element={<HomeMain />} />
                <Route path='/services' element={<ServiceMain />} />
                <Route path='/aboutus' element={<AboutMain />} />
                <Route path='/login' element={<Login />} />
                <Route path='/test' element={<Testing />} />
            </Routes>
            {location.pathname !== '/login' && <Footer />}
        </>
    )
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper
