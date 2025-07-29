import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const { auth } = useAuth();
  console.log(auth);
  if (!auth || auth.token !== 'mock-token') {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
