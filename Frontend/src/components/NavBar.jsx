import { Link, useNavigate } from "react-router-dom";
import GIMP from "../assets/GIMP.svg";
import Cookies from 'js-cookie';
import axios from "axios";
import { toast } from 'react-toastify';

//Passing the loggedIn state as props
const NavBar = ({ setIsLoggedIn, isLoggedIn }) => {
  const navigate = useNavigate();

  //Logout function to remove the cookie from the client side
   const handleLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_GENERAL_API}/api/logout`, {}, { withCredentials: true });
      Cookies.remove('isLoggedIn');    // Remove the cookie from the client side
      setIsLoggedIn(false);       //Setting the loggedIn state to false
      toast.success("Logout Successful");
      navigate('/');
    } catch (error) { 
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="h-16 w-full flex items-center justify-between px-8">
      {/* App name */}
      <Link to="/" className="flex items-center gap-2 text-xl font-bold">
        <img src={GIMP} alt="Logo" className="h-8 w-8" />
        imagify
      </Link>

      {/* Right side buttons */}
      <div className="flex gap-4">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
