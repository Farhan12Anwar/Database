import React, { createContext, useState } from 'react';

// Create a context for the user data
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: '',
        username: ''
    });
    console.log('UserProvider')

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
