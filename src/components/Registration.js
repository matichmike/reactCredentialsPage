import React, { useState } from 'react';

function Registration(props) {

  const [state, setState] = useState({
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

  const handleSubmit = e => {
    e.preventDefault();
    // submitData();
  }

  return (
    <div className="card login-card col-12 col-lg-4 mt-2 hv-center">
      
      <form ms-signup="true">

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
          // onClick={handleSubmit}
          >
            Sign Up
        </button>

      </form>
      
      <a href="/login" className="btn btn-secondary bottom-button">Have an Account? Log in here</a>
    
    </div>
  )
}

export default Registration;