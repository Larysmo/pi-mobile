import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyBB7bdl_mv15Tc4tU4CwGDLuHHeRYnGZyU",
  authDomain: "meupet-feliz.firebaseapp.com",
  projectId: "meupet-feliz",
  storageBucket: "meupet-feliz.appspot.com",
  messagingSenderId: "909502122912",
  appId: "1:909502122912:web:0d845d20395e7ee518f2c5"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };