/* eslint-disable react/style-prop-object */
import React from 'react';
import { Navigate } from 'react-router-dom';

function LogoutPage() {
  localStorage.setItem('token', '');
  return <Navigate to="/" />;
}

export default LogoutPage;
