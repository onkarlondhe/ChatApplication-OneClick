import React, { useContext } from 'react';
import UserContext from '../user/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import appLogo from '../Image/applogo.png';
const Header = () => {
  const { userName, setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserName('');
    navigate('/'); // Redirect to the homepage after logout
  };

  return (
    <header className="bg-dark text-light">
      <nav className="container navbar navbar-expand-lg navbar-dark d-flex justify-content-between">
      <Link to="/home" className="navbar-brand">
        <img
        src={appLogo}
        alt="Logo"
        style={{ marginLeft: '5px', width: '50px', height: '50px' }}
      />
         OneClick
     </Link>
       
        <div>
          <ul className="navbar-nav">
            {userName ? (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    Welcome, {userName}
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={handleLogout}>
                    log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Log in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
