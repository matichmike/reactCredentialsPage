import React from 'react';

function Loggedin() {
  return (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Logged In</h1>
      <p className="lead">You are logged in!</p>
    </div>
    <form className="container" ms-logout="true">
      <button className="btn btn-secondary">Logout</button>
    </form>
    </div>
  )
}

export default Loggedin;