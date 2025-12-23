import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <span
        style={{ fontSize: "22px", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        ←
      </span>

      <h1 style={{ marginTop: "20px" }}>
        Signin to your PopX account
      </h1>

      <p style={{ color: "#777", marginBottom: "30px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <Input label="Email Address" placeholder="Enter email address" />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
      />

      <button className="primary-btn" onClick={() => navigate("/profile")}>
        Login
      </button>

      <p style={{ marginTop: "20px", fontSize: "14px" }}>
        Don’t have an account?{" "}
        <span
          style={{ color: "#6c3cff", cursor: "pointer" }}
          onClick={() => navigate("/signup")}
        >
          Create Account
        </span>
      </p>
    </>
  );
};

export default Login;
