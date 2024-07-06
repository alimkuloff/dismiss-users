import React from 'react';
import './UserCard.css';

const UserCard = ({ user, onDismiss }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <h2>{user.first_name} {user.last_name}</h2>
      <p>{user.email}</p>
      <button onClick={() => onDismiss(user.id)}>On Dismiss</button>
    </div>
  );
};

export default UserCard;
