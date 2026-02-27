import "./signup.css";
import "../Hero/Hero"
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-box">

        <h2 className="title">Signup</h2>

        <button className="google-btn">Signup with Google</button>

        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Course" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />



        <Link to="/profile">
          <button type="button" className="signup-btn">
            Signup
          </button>
        </Link>

        <p className="forgot">Forgot Password?</p>

      </div>
    </div>
  );
}

export default Signup;