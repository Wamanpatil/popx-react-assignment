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

        {/* Header with Back Button */}
        <div className="page-header">
          <span className="back-btn" onClick={() => navigate(-1)}>←</span>
          <span className="page-title">Create your PopX account</span>
        </div>

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

          <button type="submit" className="primary-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
