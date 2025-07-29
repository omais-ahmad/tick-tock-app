import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();  

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => JSON.parse(sessionStorage.getItem('auth')) || null);

  const loginUser = (data) => {
    sessionStorage.setItem('auth', JSON.stringify(data));
    setAuth(data);
  };

  const logout = () => {
    sessionStorage.removeItem('auth');
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};