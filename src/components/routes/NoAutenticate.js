/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../noautenticate/Login';
import Signin from '../noautenticate/Signin';

const NoAutenticate = ({ handleAuth }) => (
  <div>
    <Route exact path="/"><Login handleAuth={handleAuth} /></Route>
    <Route exact path="/registro"><Signin /></Route>
  </div>
);

export default NoAutenticate;
