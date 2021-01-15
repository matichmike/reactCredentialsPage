import React, {useEffect, useState} from 'react';

function Loggedin() {
  const [member, setMember] = useState({})
  useEffect(function(){
    window.MemberStack.onReady.then(function(member) {
      setMember(member);
    })
  }, []);

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Logged In</h1>
        <p className="lead">You are logged in!</p>
      </div>
      {Object.keys(member).length > 0
        ? (
          <p className="lead">
            Name: {member.fullname}
            <br></br>
            Email: {member.email}
          </p>
        ) : <p>Loading profile...</p>
      }
      
      <form className="container">
        <a href="/ms/logout" className="btn btn-secondary">Logout</a>
      </form>
    </div>
  )
}

export default Loggedin;