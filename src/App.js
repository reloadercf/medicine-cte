import React, { useState, useEffect } from 'react';
import './App.css';
import NoAutenticate from './components/routes/NoAutenticate';
import Autenticate from './components/routes/Autenticate';
import { ContextFirebase } from './lib/ContextFirebase';
import { auth } from './lib/firebase';

function App() {
  const [autenticate, setAutenticate] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAutenticate(user);
      } else {
        setAutenticate(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <ContextFirebase>
        {autenticate ? <Autenticate /> : <NoAutenticate />}
      </ContextFirebase>
    </div>
  );
}

export default App;
