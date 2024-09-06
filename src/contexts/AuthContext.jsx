import { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { APIurls } from "../api/apiConstant";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/authSlice";

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
      console.log("User Token==>", user?.accessToken);
      dispatch(setToken(user?.accessToken));
      setLoading(false);
    });
    console.log(unsubscribe);

    return ()=>unsubscribe();
  }, []);

  const value = {
    currentUser,
    loading,
    login,
    logout,
    getAccessToken,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
