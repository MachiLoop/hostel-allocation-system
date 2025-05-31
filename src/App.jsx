import Login from "./pages/login";
import AdminLogin from "./pages/admin/adminLogin";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-row">
      <Navigation />
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
