import "./login.scss";
import wflogo from "../../assets/wflogo.svg";

export default function Login(params: any): JSX.Element {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={wflogo} alt="" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button className="loginButton">Sign In</button>
          <span>
            New to Wokeflix? <b>Sign up now</b>.
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
