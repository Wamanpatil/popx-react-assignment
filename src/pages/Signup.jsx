import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import "../styles/auth.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend, so just navigate
    navigate("/profile");
  };

  return (
    <div className="screen">
      <h2>Create your PopX account</h2>

      <form onSubmit={handleSubmit}>
        <Input label="Full Name*" placeholder="Marry Doe" />
        <Input label="Phone Number*" placeholder="9999999999" />
        <Input label="Email Address*" placeholder="marry@example.com" />
        <Input label="Password*" type="password" placeholder="********" />
        <Input label="Company Name*" placeholder="Company Name" />

        <Button text="Create Account" />
      </form>
    </div>
  );
};

export default Signup;
