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

        {/* Header with Back Button */}
        <div className="page-header">
          <span className="back-btn" onClick={() => navigate(-1)}>←</span>
          <span className="page-title">Signin to your PopX account</span>
        </div>

        <p>Lorem ipsum dolor sit amet.</p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input required />

          <label>Password</label>
          <input type="password" required />

          <button type="submit" className="primary-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
