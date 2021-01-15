import React from 'react';

function Loggedin() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Logged In</h1>
        <p className="lead">You are logged in!</p>
      </div>
      <form className="container">
        <a href="/ms/logout" className="btn btn-secondary">Logout</a>
      </form>
    </div>
  )
}

export default Loggedin;