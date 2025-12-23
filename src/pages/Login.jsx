import "../styles/auth.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Signin to your PopX account</h2>
      <p style={{ margin: "10px 0 24px", color: "#666" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="form-group">
        <label>Email Address</label>
        <input placeholder="Enter email address" />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>

      <button className="primary-btn">Login</button>

      <div className="secondary-text">
        Don&apos;t have an account?{" "}
        <span onClick={() => navigate("/signup")}>Create Account</span>
      </div>
    </div>
  );
}
