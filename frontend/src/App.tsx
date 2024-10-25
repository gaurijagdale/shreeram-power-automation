import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeMain from './pages/home/HomeMain';
import ServiceMain from './pages/services/ServiceMain';
import Login from './components/Login';
import UserList from './components/UserList';
import AboutMain from './pages/aboutus/AboutMain';

import { checkLoginStatus } from './utils/authUtils'; // Adjust the path as necessary

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchLoginStatus = async () => {
            const result = await checkLoginStatus();
            setIsLoggedIn(result.isLoggedIn);
            setUser(result.user);
        };

        fetchLoginStatus();
    }, []);


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
                <Route path='/userlist' element={<UserList />} />
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
