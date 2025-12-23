import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../styles/auth.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <Button text="Create Account" onClick={() => navigate("/signup")} />
      <Button
        text="Already Registered? Login"
        variant="secondary"
        onClick={() => navigate("/login")}
      />
    </div>
  );
};

export default Landing;
