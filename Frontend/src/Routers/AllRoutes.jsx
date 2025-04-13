import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Tasks from "../pages/Task";

// Auth check
const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

// Private route wrapper
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      
      {/* Public Route */}
      <Route path="/" element={<Dashboard />} />

      {/* Protected Route */}
      <Route
        path="/tasks"
        element={
          <PrivateRoute>
            <Tasks />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Allroutes;
