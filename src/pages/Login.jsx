import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // 🔴 stop refresh
    navigate("/profile");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Signin to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input required />

          <label>Password</label>
          <input type="password" required />

          <button type="submit" className="primary-btn">
            Login
          </button>
        </form>

        <div className="link-text">
          Don’t have an account?{" "}
          <a onClick={() => navigate("/signup")}>Create Account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
