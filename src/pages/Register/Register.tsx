import "./register.scss";
import wflogo from "../../assets/wflogo.svg";
import { useRef, useState } from "react";

export default function Register(params: any): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={wflogo} alt="" />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              ref={emailRef}
            />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <div className="input">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              ref={passwordRef}
            />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
