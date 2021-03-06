import React, { useState } from 'react';

function Registration() {

  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    const id = e.target.id;
    const value = e.target.value;
    setState(prevState => ({
      ...prevState, [id] : value
    }))
  }

  

  return (
    <div className="card login-card col-12 col-lg-4 mt-2 hv-center">
      <form ms-signup="true">
      <div className="form-group text-left">
          <label htmlFor="nameInput">Fullname</label>
            <input 
              data-ms-member="fullname"
              type="text"
              name="fullname"
              className="form-control"
              id="text"
              placeholder="Enter Your Name"
             
            />
        </div>

        <div className="form-group text-left">
          <label htmlFor="emailInput">Email</label>
            <input 
              data-ms-member="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Your Email"
              value={state.email}
              onChange={handleChange}
            />
        </div>

        <div className="form-group text-left">
          <label htmlFor="passwordInput">Password</label>
            <input 
              data-ms-member="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Your Password"
              value={state.password}
              onChange={handleChange}
            />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          >
            Sign Up
        </button>

      </form>
      
      <a href="/login" className="btn btn-secondary bottom-button">Have an Account? Log in here</a>
    
    </div>
  )
}

export default Registration;