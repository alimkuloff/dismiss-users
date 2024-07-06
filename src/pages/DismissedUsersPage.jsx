import React, { useEffect, useState } from 'react';
import './DismissedUsersPage.css';

const DismissedUsersPage = () => {
  const [dismissedUsers, setDismissedUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('dismissedUsers')) || [];
    setDismissedUsers(storedUsers);
  }, []);

  return (
    <div className="dismissed-users-page">
      <h1>Dismissed Users</h1>
      <div className="user-list">
        {dismissedUsers.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h2>{user.first_name} {user.last_name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DismissedUsersPage;
