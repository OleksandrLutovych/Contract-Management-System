import { Routes, Route, Navigate } from "react-router-dom";
import AuthenticationPage from "../app/auth/pages/AuthenticationPage";
import DashboardView from "../app/components/DashboardView";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardView />} />
      <Route path="auth" element={<AuthenticationPage />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRouter;
