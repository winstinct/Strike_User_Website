import { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { APIurls } from "../api/apiConstant";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/authSlice";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState();

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function getAccessToken() {
    return currentUser?.getIdToken(true);
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
      const token = auth?.currentUser?.accessToken;
      dispatch(setToken(token));
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  const value = {
    currentUser,
    loading,
    login,
    logout,
    getAccessToken,
    userRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.object,
};
