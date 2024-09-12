import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: 'test@example.com', 
        username: ''
    });

    useEffect(() => {
        if (user.email) {
            fetch(`http://localhost:5000/currentUser/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setUser(prev => ({ ...prev, ...data }));
            })
            .catch(err => console.error("Error fetching user data:", err));
        }
    }, [user.email]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
