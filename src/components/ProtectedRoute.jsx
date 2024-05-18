import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, role, ...rest }) => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  if (!user || user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;