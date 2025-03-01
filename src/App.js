import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import HealthcareProviderView from "./Components/HealthcareProviderView";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import { AppProvider } from "./Context/AppProvider";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="">
      <AppProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route
            path="/healthprovider"
            element={
              <ProtectedRoute>
               <HealthcareProviderView />
              </ProtectedRoute>
            }
          />
      
      </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
