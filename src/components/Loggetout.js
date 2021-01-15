import React from 'react';

function Loggedout() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Logged Out</h1>
        <p className="lead">You are logged out!</p>
      </div>
      <form className="container">
        <a href="/" className="btn btn-secondary">Return to home page</a>
      </form>
    </div>
  )
}

export default Loggedout;