import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      <header className="navbar">
        <h2>E-Governance System</h2>

        <nav>
          <Link to="/login" className="nav-btn">Login</Link>
          <Link to="/register" className="nav-btn">Register</Link>
          <Link to="/view-schemes" className="nav-btn">View Schemes</Link>
          <Link to="/verify-certificate" className="nav-btn"> Verify Certificate</Link>
          <Link to="/about" className="nav-btn">About</Link>
        </nav>
      </header>

      <section className="hero-section">
        <h1>Welcome to E-Governance System</h1>

        <p>
          Access government services online with transparency,
          security, and efficiency.
        </p>

        <div className="hero-buttons">
          <Link to="/login" className="action-btn">
            Login
          </Link>

          <Link to="/register" className="action-btn">
            Register
          </Link>
        </div>
      </section>

      <section className="services-section">
        <h2>Popular Government Services</h2>

        <div className="service-cards">

          <div className="card">
            <h3>Government Schemes</h3>
            <p>Browse and apply for available schemes.</p>
          </div>

          <div className="card">
            <h3>Certificate Verification</h3>
            <p>Verify academic and government certificates.</p>
          </div>

          <div className="card">
            <h3>Citizen Services</h3>
            <p>Access certificates and public services online.</p>
          </div>

          <div className="card">
            <h3>Grievance Portal</h3>
            <p>Submit complaints and track resolutions.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;