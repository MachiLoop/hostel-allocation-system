import Login from "./pages/login";
import AdminLogin from "./pages/admin/adminLogin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
