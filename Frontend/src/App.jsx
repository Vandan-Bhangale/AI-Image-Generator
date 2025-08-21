import './App.css'
import Login from './components/Login';
import NavBar from './components/NavBar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Signup from './components/Signup';
import Home from './components/Home';
import { useEffect, useState } from 'react';

function App() {

  const[isLoggedIn,setIsLoggedIn] = useState(false);
  const [user,setUser] = useState(null);

useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/status`, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setIsLoggedIn(data.isLoggedIn);
        setUser(data.user || null);  
      } catch (error) {
        console.error("Error checking auth status:", error);
      }
    };
    checkAuthStatus();
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
      </Routes>
    </Router>
    </>
  )
}

export default App
