import React from 'react';

function Signedup() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Successfully subscribed!</h1>
        <p className="lead">You have created an account!</p>
      </div>
      <form className="container">
        <a href="/" className="btn btn-secondary">Return to home page</a>
      </form>
    </div>
  )
}

export default Signedup;