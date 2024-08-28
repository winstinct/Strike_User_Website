import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// import { storage, ref, uploadBytes, getDownloadURL } from '/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,

//   authDomain: import.meta.env.VITE_authDomain,

//   projectId: import.meta.env.VITE_projectId,

//   storageBucket: import.meta.env.VITE_storageBucket,

//   messagingSenderId: import.meta.env.VITE_messagingSenderId,

//   appId: import.meta.env.VITE_appId,

//   measurementId: import.meta.env.VITE_measurementId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyC9B0bt_CIi1dB6hcaw7yafGZUOkLPEMas",
  authDomain: "striekuserapp.firebaseapp.com",
  projectId: "striekuserapp",
  storageBucket: "striekuserapp.appspot.com",
  messagingSenderId: "994786943300",
  appId: "1:994786943300:web:d3dc36796d99920d2e3711",
  measurementId: "G-6VLS57QRGB",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
const storage = getStorage(app);
export { storage, ref, uploadBytes, getDownloadURL };
export default app;
