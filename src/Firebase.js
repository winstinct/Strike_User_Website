import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.meta.env.VITE_apiKey,

  authDomain: process.meta.env.VITE_authDomain,

  projectId: process.meta.env.VITE_projectId,

  storageBucket: process.meta.env.VITE_storageBucket,

  messagingSenderId: process.meta.env.VITE_messagingSenderId,

  appId: process.meta.env.VITE_appId,

  measurementId: process.meta.env.VITE_measurementId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const database = getDatabase(app);

export default app;
