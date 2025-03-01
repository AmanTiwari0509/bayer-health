import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import HealthcareProviderView from "./Components/HealthcareProviderView";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthprovider" element={<HealthcareProviderView />} />
      </Routes>
    </div>
  );
}

export default App;
