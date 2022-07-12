/* eslint-disable react/style-prop-object */
import { logout } from 'libs/utils/auth';
import React from 'react';

function LogoutPage() {
  logout();
  console.log('logout');
  return <>logout</>;
}

export default LogoutPage;
