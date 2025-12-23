import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Signin to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet.</p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input required />

          <label>Password</label>
          <input type="password" required />

          <button className="primary-btn" type="submit">
            Login
          </button>
        </form>

        <p className="link-text">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")}>Create Account</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
