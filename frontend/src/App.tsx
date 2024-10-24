import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeMain from './pages/home/HomeMain';
import ServiceMain from './pages/services/ServiceMain';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomeMain/>}/>
          <Route path='/services' element={<ServiceMain/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
