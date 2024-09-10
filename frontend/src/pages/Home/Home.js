import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './Home.css';
import { UserContext } from '../../components/UserProvider';
const Home = () => {
    const [users, setUser] = useState([]);
    const { user } = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/user`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    useEffect(() => {
        var email = user.email;
        fetch(`http://localhost:5000/currentUser?email=${email}`)
        .then(res => res.json())
        .then(data => setCurrentUser())
    },[user.email]);

console.log(currentUser)

    return (
        <div className="home-container">
             <div>
            <h1>Welcome, {currentUser.username}</h1>
            <p>Email: {user.email}</p>
        </div>
            <h1>All Users Available</h1>
            <div className="users-list">
                {users.map(user => (
                    <div key={user.id} className="user-card">
                        <h2>{user.username}</h2>
                        {user.profileImage && <img src={user.profileImage} alt={`${user.username}'s profile`} />}
                        <p>Email: {user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
