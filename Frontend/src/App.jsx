import './App.css'
import Login from './components/Login';
import NavBar from './components/NavBar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Signup from './components/Signup';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import Generator from './components/Generator';

function App() {

  const[isLoggedIn,setIsLoggedIn] = useState(false);
  const [user,setUser] = useState(null);

  // Check authentication status on initial load
useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_GENERAL_API}/api/status`, {
          method: "GET",
          credentials: "include",
          cache: "no-store"   // 👈 prevents 304 caching
        });
        const data = await response.json();
        setIsLoggedIn(data.isLoggedIn);       // Update the loggedIn state, data will come from the backend API
        setUser(data.user || null);       // Update the user state logged in or not
      } catch (error) {
        console.error("Error checking auth status:", error);
      }
    };
    checkAuthStatus();      // Call the function to check auth status
  }, []);

  return (
    <>
    <Router>
      <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}></NavBar>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/generate' element={<Generator isLoggedIn={isLoggedIn} />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
