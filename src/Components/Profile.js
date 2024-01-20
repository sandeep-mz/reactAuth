// Profile.js
import React, { useEffect, useState } from "react"; 

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      const storedUserDetails = localStorage.getItem("userDetails");
      if (storedUserDetails) {
        const userData = JSON.parse(storedUserDetails);
        setUser(userData);
        console.log(userData);
      } else {
        fetch(`https://dummyjson.com/users/${userId}`)
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("userDetails", JSON.stringify(data));
            setUser(data);
          });
      }
    }
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userDetails");
   
    window.location.href = "/"; 
  };

  return (
    <div className="profile-container">
      {user && (
        <div className="profile">
          <img src={user.image} alt="Profile Icon" className="profile-icon" />
          <div className="text">
            <p>User ID: {user.id}</p>
            <p>Name: {user.firstName} {user.maidenName}</p>
            <p>Email: {user.email}</p>
            <p>University: {user.university}</p>

            {/* Add more user details as needed */}
            <p className="login-successful">Login Successful</p>
          </div>
          <a href="#" className="back-to-login" onClick={handleLogout}> Logout  </a>
        </div>
      )}
    </div>
  );
};

export default Profile;
