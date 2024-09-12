import React, { useEffect, useState, useContext } from 'react';
import './Home.css';
import { UserContext } from '../../components/UserProvider';

const Home = () => {
    const [users, setUsers] = useState([]);
    const { user } = useContext(UserContext);  

    useEffect(() => {
        // Fetch all users
        fetch(`http://localhost:5000/user`)
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);

    return (
        <div className="home-container">
            <div>
                <h1>Welcome, {user.username}</h1> 
                <p>Email: {user.email}</p> 
            </div>

            <h1>All Users Available</h1>
            <div className="users-list">
                {users.map(user => (
                    <div key={user._id} className="user-card">
                        <h2>{user.username}</h2>
                        {user.profileImage && (
                            <img src={user.profileImage} alt={`${user.username}'s profile`} />
                        )}
                        <p>Email: {user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
