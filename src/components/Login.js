import React, { useState } from 'react';

function Login() {

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

  return (
    <div className="card login-card col-12 col-lg-4 mt-2 hv-center">
      
      <form ms-login="true">

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
            Log in
        </button>
      </form>
      <a href="/" className="btn btn-secondary bottom-button">Create a New Account</a>
    </div>
  )
}

export default Login;