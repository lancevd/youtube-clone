import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAp4Bk7PQWSJmy1M2Y_lGdqAVIPz80OGDc",
    authDomain: "auth-e818c.firebaseapp.com",
    projectId: "auth-e818c",
    storageBucket: "auth-e818c.appspot.com",
    messagingSenderId: "845529494536",
    appId: "1:845529494536:web:0f56906c22a957ca8e0dbd",
    measurementId: "G-JDB2BWB3XL"
  };

  const app = initializeApp(firebaseConfig);

  export const authentication = getAuth(app);