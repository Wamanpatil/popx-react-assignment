import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ marginTop: "120px", marginBottom: "10px" }}>
        Welcome to PopX
      </h1>

      <p style={{ color: "#777", marginBottom: "40px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <button
        className="primary-btn"
        onClick={() => navigate("/signup")}
      >
        Create Account
      </button>

      <button
        className="secondary-btn"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </>
  );
};

export default Landing;
