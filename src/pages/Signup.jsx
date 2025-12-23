import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 🔴 VERY IMPORTANT
    navigate("/profile");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create your PopX account</h2>

        <form onSubmit={handleSubmit}>
          <label>Full Name*</label>
          <input name="name" onChange={handleChange} required />

          <label>Phone number*</label>
          <input name="phone" onChange={handleChange} required />

          <label>Email address*</label>
          <input name="email" onChange={handleChange} required />

          <label>Password*</label>
          <input type="password" name="password" onChange={handleChange} required />

          <label>Company name</label>
          <input name="company" onChange={handleChange} />

          <label>Are you an Agency?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.agency === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.agency === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>

          <button type="submit" className="primary-btn">
            Create Account
          </button>
        </form>

        <div className="link-text">
          Already have an account?{" "}
          <a onClick={() => navigate("/login")}>Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
