import useLoginCheck from 'hooks/auth/useLoginCheck';
import React, { ReactNode } from 'react';
import { Navigate, Route } from 'react-router-dom';

function PrivateRoute({ children }: any) {
  return <Route>{useLoginCheck() ? { children } : <Navigate to="/" />}</Route>;
}

export default PrivateRoute;
