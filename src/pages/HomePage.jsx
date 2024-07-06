import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import './HomePage.css';

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(data => setUsers(data.data)); 
  }, []);

  const handleDismiss = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);

    const dismissedUsers = JSON.parse(localStorage.getItem('dismissedUsers')) || [];
    const user = users.find(user => user.id === userId);
    localStorage.setItem('dismissedUsers', JSON.stringify([...dismissedUsers, user]));
  };

  return (
    <div className="home-page">
      <h1>User Management</h1>
      <div className="user-list">
        {users.map(user => (
          <UserCard key={user.id} user={user} onDismiss={handleDismiss} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
