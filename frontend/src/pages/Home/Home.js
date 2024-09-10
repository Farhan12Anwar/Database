import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [user, setUser] = useState(null);

console.log(user)

    return (
        <div className="home-container">
            {user ? (
                <div>
                    <h1>Welcome, {user.username}!</h1>
                    {user.profilePhoto ? (
                        <img src={`data:image/png;base64,${user.profilePhoto}`} alt="Profile" />
                    ) : (
                        <p>No profile photo</p>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Home;
