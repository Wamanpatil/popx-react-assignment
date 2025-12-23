import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Welcome to PopX</h1>
      <p style={{ margin: "12px 0 30px", color: "#666" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <button
        style={buttonPrimary}
        onClick={() => navigate("/signup")}
      >
        Create Account
      </button>

      <button
        style={buttonSecondary}
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
}

const buttonPrimary = {
  padding: "14px",
  background: "#6c3cff",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
  marginBottom: "12px"
};

const buttonSecondary = {
  padding: "14px",
  background: "#e6ddff",
  color: "#6c3cff",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer"
};
