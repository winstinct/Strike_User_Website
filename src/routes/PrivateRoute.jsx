import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function PrivateRoute({ children }) {
  const { currentUser, loading, userRole } = useAuth();
  const from = useLocation()?.pathname;
  // if (!userRole?.role?.users) {
  //   return <Navigate state={{ from }} to="/auth/login" />;
  // }
  if (loading) {
    return (
      <div className="flex justify-center items-center mr-[13.5rem]">
        <Icon
          className="text-[3rem] text-[#A967FF]"
          icon="line-md:loading-loop"
        />
      </div>
    );
  }
  if (!currentUser) {
    return <Navigate state={{ from }} to="/auth/login" />;
  }
  return children;
}
