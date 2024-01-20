
import React, { useState } from 'react';
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  return (
    <div>
    {!user ? (
      <Login setUser={setUser} />
    ) : (
      <Profile userId={user.id} />
    )}
  </div>
  );
}

export default App;
