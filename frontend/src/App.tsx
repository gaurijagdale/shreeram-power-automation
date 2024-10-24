import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeMain from './pages/home/HomeMain';
import ServiceMain from './pages/services/ServiceMain';
import Login from './components/Login';
import Test from './components/Test';

function App() {

  const location = useLocation(); // Get the current route

  return (
    <>
        {/* <Navbar/> */}
        {location.pathname !== '/login' && <Navbar />} {/* Conditionally render Navbar */}
        <Routes>
          <Route path='/' element={<HomeMain />} />
          <Route path='/services' element={<ServiceMain />} />
          <Route path='/login' element={<Login />} />
          <Route path='/test' element={<Test />} />
        </Routes>
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
