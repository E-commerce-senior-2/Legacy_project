'use client'
import axios from 'axios';
import React, { createContext, useEffect, useState, ReactNode } from 'react';

interface UserContextValue {
  login: ((input: any, role: string) => void);
  signing: (input: any, role: string) => void;
  logout: (input: any) => void;
  currentUser: any;
}
export const UserContext = createContext<UserContextValue>({
    login: () => {},
    signing: () => {},
    logout: () => {},
    currentUser: null,
  });

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(
    JSON.parse(localStorage.getItem('user') || 'null')
  );

  const login  = async (input: any, role: string) => {
    try {
      const res = await axios.post(`http://127.0.0.1:3001/auth/signin/${role}`, input);
      setCurrentUser(res.data);
      console.log('done');
    } catch (err) {
      console.error(err);
    }
  };

  const signing = async (input: any, role: string) => {
    try {
      const res = await axios.post(`http://127.0.0.1:3001/auth/signupgoogle/${role}`, input);
      
      setCurrentUser(res.data);
      console.log(currentUser);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async (input: any) => {
    await axios.post('http://127.0.0.1:3001/auth/logout');
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ login, logout, currentUser, signing }}>
      {children}
    </UserContext.Provider>
  );
};
