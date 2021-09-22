/* eslint-disable max-len */
import { auth } from './firebase';

export const handleSignin = (email, password) => auth.createUserWithEmailAndPassword(email, password);

export const handleLogin = (email, password) => auth.signInWithEmailAndPassword(email, password);
