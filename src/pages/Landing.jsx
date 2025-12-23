import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <Link to="/signup" className="primary-btn">
          Create Account
        </Link>

        <Link to="/login" className="secondary-btn">
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
};

export default Landing;
