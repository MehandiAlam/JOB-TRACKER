import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/AddJob" element={<AddJob />} />
      <Route path="/EditJob/:id" element={<EditJob />} />
    </Routes>
  );
}

export default App;