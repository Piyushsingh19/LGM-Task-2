import React from "react";

const Users = ({ loading, users }) => {
  const mainstyle = {
    display: "flex"
  };
  return loading ? (
    <div id="main" align="center">
      <img src="https://c.tenor.com/28DFFVtvNqYAAAAC/loading.gif"  alt="Loading.." />
        
    </div>
  ) : (
    <div id="main" style={mainstyle}>
      {users.map((user) => (
        <div className="profile_id" key={user.id}>
          {console.log(user)}

          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
          <h1 className="name">
            {user.first_name} {user.last_name}
          </h1>
         <h3 className="email">{user.email}</h3>
          <p>User ID: {user.id}</p> 
        </div>
      ))}
    </div>
  );
};

export default Users;