import React from 'react';
import { withRouter } from 'react-router';

function Header({location:{pathname = '/'}}) {
  
  return (
    <nav className="navbar navbar-dark bg-secondary">
      <div className="row col-12 d-flex justify-content-center text-white">
      <span className="h3">
        {pathname === '/login' ? 'Log in' 
          : pathname === '/loggedin' ? 'Logged In' 
          : pathname === '/ms/logout' ? 'Logged Out' 
          : pathname === '/signedup' ? 'Signed Up' 
          : 'Please Sign Up for Newsletter!'}
        </span>
      </div>
    </nav>
    )
};

export default withRouter(Header);