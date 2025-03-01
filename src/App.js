import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import HealthcareProviderView from "./Components/HealthcareProviderView";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import { AppProvider } from "./Context/AppProvider";
import ProtectedRoute from "./ProtectedRoute";
import MyProfile from "./Components/MyProfile";
import MyWellnessGoals from "./Components/MyWellnessGoals";
import MyMessages from "./Components/MyMessages";
import MyLogout from "./Components/MyLogout";
import Dashboard from "./Components/Dashboard";

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
      
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/wellnessgoals" element={<MyWellnessGoals />} />
        <Route path="/messages" element={<MyMessages />} />
        <Route path="/logout" element={<MyLogout />} />
      </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
