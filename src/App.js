import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
