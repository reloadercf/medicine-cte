import firebase from 'firebase/app';
import 'firebase/auth';

// eslint-disable-next-line no-undef
const firebaseConfig = { ...jaja };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;
