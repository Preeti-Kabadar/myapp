import { Link } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (
    <>
    

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Welcome to KLE's Library</h1>
        <p>Explore thousands of books and digital resources</p>
       <Link to={"/Login"}>  <button className="hero-btn">Already have an account? Login</button></Link>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-card">
          <h2>25+</h2>
          <p>Total Categories</p>
        </div>
        <div className="stat-card">
          <h2>5000+</h2>
          <p>Total Books</p>
        </div>
        <div className="stat-card">
          <h2>1200+</h2>
          <p>Total Students</p>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="new-arrivals">
        <h2>📖 New Arrivals</h2>
        <div className="books">
          <div className="book-card">
            <img src="https://storage.googleapis.com/nova-vijaynicole-unsecured-files/unsecured/contents-1647011792591-88cc5347-cde2-46dc-a420-c61c7215dca2/cover.png" alt="Book" />
            <p>Data Structures</p>
          </div>

          <div className="book-card">
            <img src="https://shizzy.blr1.digitaloceanspaces.com/iipstore/wp-content/uploads/2024/05/24180506/1906-front-cover-page_11zon-scaled.jpg" alt="Book" />
            <p>Web Development</p>
          </div>

          <div className="book-card">
            <img src="https://files.idyllic.app/files/static/3765210?width=384&optimizer=image" alt="Book" />
            <p>Artificial Intelligence</p>
          </div>
        </div>
      </section>

      {/* NAVBAR LINKED BODY SECTIONS */}
      <section className="nav-body">


       

        <section>
          <div id="about" className="nav-section">
            <h2>About Us</h2>
            <p>
              KLE's Library supports learning and research by offering
              high-quality physical and digital resources for students and faculty.
            </p>
          </div>
        </section>

        <section>
          <div id="services" className="nav-section">
            <h2>Services</h2>
            <ul>
              <li>Book Lending System</li>
              <li>Online Digital Library</li>
              <li>Research Journals Access</li>
              <li>Quiet Study Zones</li>
            </ul>
          </div>
        </section>

        <section>
          <div id="contact" className="nav-section">
            <h2>Contact</h2>
            <p>Email: library@kle.edu</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: KLE Campus, India</p>
          </div>
        </section>
      </section>

      {/* FOOTER */}
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

export default Hero;