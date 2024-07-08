import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.css";

function LoginForm() {
  return;
  <form className="login-form-wrapper ">
    <div className="login-form-title">Login Form</div>
    <div className="inputs-container">
      <Input name ='user_email'label= 'Email' type='email' placeholder = 'Enter your Email'/>
      <Input name ='user_password' label= 'Password' type= 'password'placeholder = 'Enter your password'/>
    </div>
    <Button name='Login'  type='sumbit'/>
  </form>;
}

export default LoginForm;
