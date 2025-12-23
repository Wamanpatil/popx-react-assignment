import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import "../styles/auth.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="screen">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <form onSubmit={handleLogin}>
        <Input label="Email Address" placeholder="Enter email address" />
        <Input label="Password" type="password" placeholder="Enter password" />

        <Button text="Login" />
      </form>
    </div>
  );
};

export default Login;
