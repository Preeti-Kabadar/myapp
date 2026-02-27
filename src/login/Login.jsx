
import { Link } from "react-router-dom";
import "./login.css";
import "../Hero/navbar/Navbar"



function Login() {
  return (
    <div className="login-container">
      <div className="login-box">

        <h2 className="title">Login</h2>

        <div className="logo">LOGO</div>

        <input type="text" placeholder="Name / Email" />
        <input type="password" placeholder="Password" />

    <Link to={"/profile"}> <button className="login-btn">Login</button></Link>

        <p className="forgot">Forgot Password?</p>

      </div>
    </div>
  );
}

export default Login;