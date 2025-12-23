import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Create your PopX account</h1>

      <Input label="Full Name*" placeholder="Marry Doe" />
      <Input label="Phone number*" placeholder="+91 9876543210" />
      <Input label="Email address*" placeholder="example@email.com" />
      <Input label="Password*" type="password" placeholder="Enter password" />
      <Input label="Company name" placeholder="Company Name" />

      <p style={{ marginTop: "20px" }}>Are you an Agency?</p>

      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <label><input type="radio" checked /> Yes</label>
        <label><input type="radio" /> No</label>
      </div>

      <button
        className="primary-btn"
        onClick={() => navigate("/profile")}
      >
        Create Account
      </button>

      <p style={{ marginTop: "20px", fontSize: "14px" }}>
        Already have an account?{" "}
        <span
          style={{ color: "#6c3cff", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </>
  );
};

export default Signup;
