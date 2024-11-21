// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // Retrieve the token from localStorage if it exists
  const storedToken = localStorage.getItem('authToken');
  
  // Use the token from localStorage (if available) or default to null
  const [token, setToken] = useState(storedToken);

  // Define your static token for testing
  const STATIC_TOKEN = '12345-static-token';

  // Login function
  const login = () => {
    setToken(STATIC_TOKEN); // Set the static token
    localStorage.setItem('authToken', STATIC_TOKEN); // Store the token in localStorage
  };

  // Logout function
  const logout = () => {
    setToken(null); // Clear the token from state
    localStorage.removeItem('authToken'); // Remove the token from localStorage
  };

  // Check if the user is authenticated
  const isAuthenticated = token === STATIC_TOKEN;

  useEffect(() => {
    // If the token exists in localStorage, set it in the state on initial load
    if (storedToken) {
      setToken(storedToken);
    }
  }, [storedToken]);

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
