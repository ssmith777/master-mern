import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

const apiUrl = `http://localhost:8080`;

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(apiUrl + '/users');
    setUsers(res.data);
    console.log(res.data)
  };
  const createUser = async () => {
    await axios.get(apiUrl + '/user-create');
    fetchData();
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => createUser()}>Create User</button>
        <p>Users list:</p>
        <ul>
          {users.map(user => (
            <li key={user._id}>id: {user._id}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
