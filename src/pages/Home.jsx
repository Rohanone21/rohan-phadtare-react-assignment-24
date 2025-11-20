import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to Home Page</h1>
      <p className="subtitle">This page is publicly accessible.</p>

      <div className="button-group">
        <Link className="btn" to="/login">Go to Login</Link>
        <Link className="btn" to="/dashboard">Go to Dashboard</Link>
      </div>
    </div>
  );
};

export default Home;
