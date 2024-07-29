// src/components/privateRoutes.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../components/firebase'; // Adjust the import according to your firebase config location
import Loader from './loader';
const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div><Loader /></div>;
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
