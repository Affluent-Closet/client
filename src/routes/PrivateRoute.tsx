import useLoginCheck from 'hooks/auth/useLoginCheck';
import React, { ReactNode } from 'react';
import { Navigate, Route } from 'react-router-dom';

function PrivateRoute({ path, element }: any) {
  const el = useLoginCheck() ? element : <Navigate to="/" />;

  return <Route path={path} element={el} />;
}
export default PrivateRoute;
