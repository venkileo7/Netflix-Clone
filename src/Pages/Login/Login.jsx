import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { logIn, signUp } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif";

const Login = () => {
  const [sign, setSign] = useState("In");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSignInChange() {
    setSign("Up");
  }

  async function user_auth(event) {
    setLoading(true);
    event.preventDefault();
    if (sign === "In") {
      await logIn(email, password);
    } else {
      await signUp(username, email, password);
    }
    setLoading(false);
  }

  return loading ? (
    <div className="login-spinner">
      <img src={netflix_spinner} />
    </div>
  ) : (
    <div className="login">
      <img src={logo} className="login-logo" />

      <div className="form-div">
        <h1>Sign {sign}</h1>
        <form>
          {sign === "Up" && (
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Username"
            />
          )}
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            Sign {sign}
          </button>
          <div className="remember">
            <div className="rem-left">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <div className="rem-right">
              <p>Need Help?</p>
            </div>
          </div>

          <div className="form-switch">
            {sign === "Up" ? (
              <p>
                Already Have an Account?{" "}
                <span
                  onClick={() => {
                    setSign("In");
                  }}
                >
                  Sign In Now
                </span>
              </p>
            ) : (
              <p>
                New to Netflix?{" "}
                <span onClick={handleSignInChange}>Sign Up Now</span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
