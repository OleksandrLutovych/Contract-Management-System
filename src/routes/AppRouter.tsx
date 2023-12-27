import { Routes, Route, Navigate } from "react-router-dom";
import AuthenticationPage from "../app/auth/pages/AuthenticationPage";
import CalendarPage from "../app/pages/Calendar";
import ContractorsPage from "../app/pages/Contractors";
import DashboardPage from "../app/pages/DashboardPage/DashboardPage";
import ContractsPage from "../app/pages/Contracts";
import ReportsPage from "../app/pages/Reports/ReportsPage";
import AddContractorPage from "../app/pages/AddContractor";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/contractors" element={<ContractorsPage />} />
      <Route path="/contracts" element={<ContractsPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/auth" element={<AuthenticationPage />} />
      <Route path="/addcontractor" element={<AddContractorPage />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRouter;
