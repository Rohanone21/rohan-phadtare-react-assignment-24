import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import "./Login.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h1 className="title">Login</h1>

      <form className="login-form" onSubmit={handleLogin}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
