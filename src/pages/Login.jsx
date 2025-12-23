import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import "../styles/auth.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="auth-screen">
      <div className="auth-card">
        <h2>Signin to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <form onSubmit={handleSubmit}>
          <Input label="Email Address" placeholder="Enter email address" />
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
          />

          <Button text="Login" disabled />
        </form>
      </div>

      {/* Bottom Navigation */}
      <div className="auth-footer">
        <span className="icon">🏠</span>
        <span className="arrow">‹</span>
        <span className="step">2 of 4</span>
        <span className="arrow">›</span>
      </div>
    </div>
  );
};

export default Login;
