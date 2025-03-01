import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MyProfile from "./Components/MyProfile";
import MyWellnessGoals from "./Components/MyWellnessGoals";
import MyMessages from "./Components/MyMessages";
import MyLogout from "./Components/MyLogout";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/wellnessgoals" element={<MyWellnessGoals />} />
        <Route path="/messages" element={<MyMessages />} />
        <Route path="/logout" element={<MyLogout />} />
      </Routes>
    </div>
  );
}

export default App;
