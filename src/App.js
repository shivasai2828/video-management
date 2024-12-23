import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginForm from "./Pages/LoginPage";
import RegisterForm from "./Pages/RegisterPage";
import DashboardPage from "./Pages/DashboardPage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import DashboardPage from "./pages/DashboardPage";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
