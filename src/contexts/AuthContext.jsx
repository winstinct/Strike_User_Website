import React, { useContext, useState, useEffect } from "react";
import { auth } from "../Firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { APIurls } from "../api/apiConstant";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/authSlice";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState();

  function signUp(email, password) {
    return createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function getAccessToken() {
    return currentUser.getIdToken(true);
  }
  function saveUserRole(value) {
    setUserRole(value);
  }
  const getUserRoleFunc = async (user) => {
    try {
      const result = await fetch(APIurls.getRoles, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      });
      const resultJson = await result.json();

      console.log(resultJson);
      if (!result.ok) {
        throw new Error("Failed to login");
      }

      setUserRole(resultJson?.response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      await getUserRoleFunc(user);
      console.log("User Token==>", user?.accessToken);
      dispatch(setToken(user?.accessToken))
      setLoading(false);
    });
    console.log(unsubscribe);

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    getAccessToken,
    saveUserRole,
    userRole,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
