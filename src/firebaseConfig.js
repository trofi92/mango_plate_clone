import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// export const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
export const firebaseConfig = {
  apiKey: "AIzaSyB3sy3DYAb3sz7WZgEQrtkwANzizj3wBnI",
  authDomain: "bananaplate-clone.firebaseapp.com",
  projectId: "bananaplate-clone",
  storageBucket: "bananaplate-clone.appspot.com",
  messagingSenderId: "339115685729",
  appId: "1:339115685729:web:71a7f7f82f4df7331cf720",
  databaseURL:
    "https://bananaplate-clone-default-rtdb.firebaseio.com/",
  measurementId: "G-LXSTVR58XR",
};

const app = initializeApp(firebaseConfig);

export const authService = getAuth(app);
export const dbService = getFirestore();
export const realtimeDbService = getDatabase();
