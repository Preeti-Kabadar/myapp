import "./profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      {/* PROFILE SECTION */}
      <div className="profile-wrapper">
        <h1 className="profile-title">My Profile</h1>

        <div className="profile-single-card">
          <div className="profile-avatar">👤</div>

          <h3>Student Name</h3>
          <p className="email">student@email.com</p>

          <div className="profile-details">
            <div>
              <span>Course</span>
              <p>Full Stack Development</p>
            </div>
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* FOOTER (FROM HERO PAGE) */}
      <footer className="footer">
        <div>
          <h3>About Us</h3>
          <p>KLE College Library</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>library@kle.edu</p>
        </div>
      </footer>
    </>
  );
}

export default Profile;