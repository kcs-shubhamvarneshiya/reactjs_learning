import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../features/auth/login";
import AdminLayout from "../layout/AdminLayout";
import EmployeeLayout from "../layout/EmployeeLayout";
import AdminDashboard from "../features/dashboard/AdminDashboard";
import EmployeeDashboard from "../features/dashboard/EmployeeDashboard";
import Profile from "../features/profile/Profile";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>

      <Route
        path="/employee"
        element={
          <ProtectedRoute>
            <EmployeeLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<EmployeeDashboard />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
