import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.css";

function LoginForm() {
  return;
  // eslint-disable-next-line no-unreachable
  <form className="login-form-wrapper ">
    <div className="login-form-title">Login Form</div>
    <div className="inputs-container">
      <Input
        id="Email"
        name="user_email"
        label="Email"
        type="email"
        placeholder="Enter your Email"
      />
      <Input
        id="Password"
        name="user_password"
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
    </div>
    <Button name="Login" type="sumbit" />
  </form>;
}

export default LoginForm;
