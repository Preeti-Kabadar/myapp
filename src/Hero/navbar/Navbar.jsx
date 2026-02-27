import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const goToSection = (id) => {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">📚 KLE Library</div>

      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><button onClick={() => goToSection("about")}>About</button></li>
        <li><button onClick={() => goToSection("services")}>Services</button></li>
        <li><button onClick={() => goToSection("contact")}>Contact</button></li>
      </ul>

      <NavLink to="/signup" className="nav-btn">Signup</NavLink>
    </nav>
  );
}

export default Navbar;