import { Routes, Route, Navigate } from "react-router-dom";
import AuthenticationPage from "../app/auth/pages/AuthenticationPage";
import CalendarPage from "../app/pages/Calendar";
import ContractorsPage from "../app/pages/Contractors";
import ContractorsAddPage from "../app/pages/Contractors/ContractorsAddPage";
import ContractorsViewPage from "../app/pages/Contractors/ContractorsViewPage";
import DashboardPage from "../app/pages/DashboardPage/DashboardPage";
import ContractsPage from "../app/pages/Contracts";
import ContractsAddPage from "../app/pages/Contracts/ContractsAddPage";
import ReportsPage from "../app/pages/Reports/ReportsPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/contractors" element={<ContractorsPage />} />
      <Route path="/contractors/add" element={<ContractorsAddPage />} />
      <Route path="/contractors/view" element={<ContractorsViewPage />} />
      <Route path="/contracts" element={<ContractsPage />} />
      <Route path="/contracts/add" element={<ContractsAddPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/auth" element={<AuthenticationPage />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRouter;
