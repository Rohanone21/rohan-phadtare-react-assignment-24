import useAuth from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <h1 className="title">Dashboard</h1>
      <p className="subtitle">You are logged in.</p>

      <button className="btn logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
