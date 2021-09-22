/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import { handleSignin, handleLogin } from './services';
import CatchErrors from './CatchErrors';

const GlobalContext = createContext();
const { Provider, Consumer } = GlobalContext;

function ContextFirebase({ children }) {
  return (
    <Provider value={{ handleSignin, handleLogin, CatchErrors }}>
      {children}
    </Provider>
  );
} export { ContextFirebase, Consumer as UseConsumer, GlobalContext };
