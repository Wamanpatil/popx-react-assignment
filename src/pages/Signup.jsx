import "../styles/auth.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Create your PopX account</h2>

      <div className="form-group">
        <label>Full Name*</label>
        <input placeholder="Marry Doe" />
      </div>

      <div className="form-group">
        <label>Phone number*</label>
        <input placeholder="+91 9876543210" />
      </div>

      <div className="form-group">
        <label>Email address*</label>
        <input placeholder="example@email.com" />
      </div>

      <div className="form-group">
        <label>Password*</label>
        <input type="password" placeholder="Enter password" />
      </div>

      <div className="form-group">
        <label>Company name</label>
        <input placeholder="Company Name" />
      </div>

      <p style={{ fontSize: "14px", marginTop: "8px" }}>
        Are you an Agency?
      </p>

      <div style={{ marginBottom: "20px" }}>
        <input type="radio" name="agency" /> Yes
        <input type="radio" name="agency" style={{ marginLeft: "20px" }} /> No
      </div>

      <button className="primary-btn">Create Account</button>

      <div className="secondary-text">
        Already have an account?{" "}
        <span onClick={() => navigate("/login")}>Login</span>
      </div>
    </div>
  );
}
