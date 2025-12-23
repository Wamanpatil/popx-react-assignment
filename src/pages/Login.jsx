import Input from "../components/Input";
import Button from "../components/Button";
import "../styles/auth.css";

const Login = () => {
  return (
    <div className="screen">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <Input label="Email Address" placeholder="Enter email address" />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
      />

      <Button text="Login" />
    </div>
  );
};

export default Login;
