import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create your PopX account</h2>

        <form onSubmit={handleSubmit}>
          <label>Full Name*</label>
          <input required />

          <label>Phone number*</label>
          <input required />

          <label>Email address*</label>
          <input required />

          <label>Password*</label>
          <input type="password" required />

          <label>Company name</label>
          <input />

          <label>Are you an Agency?</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="agency" defaultChecked /> Yes
            </label>
            <label>
              <input type="radio" name="agency" /> No
            </label>
          </div>

          <button className="primary-btn" type="submit">
            Create Account
          </button>
        </form>

        <p className="link-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
