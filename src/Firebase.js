import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyC9B0bt_CIi1dB6hcaw7yafGZUOkLPEMas",

  authDomain: "striekuserapp.firebaseapp.com",

  projectId: "striekuserapp",

  storageBucket: "striekuserapp.appspot.com",

  messagingSenderId: "994786943300",

  appId: "1:994786943300:web:d3dc36796d99920d2e3711",

  measurementId: "G-6VLS57QRGB"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const database = getDatabase(app);

export default app;