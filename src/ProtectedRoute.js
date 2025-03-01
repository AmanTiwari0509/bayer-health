import { Navigate } from "react-router-dom";
import { useAppContext } from "./Context/AppProvider";


const ProtectedRoute = ({ children }) => {

    const { isAuthenticated } = useAppContext();


  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
