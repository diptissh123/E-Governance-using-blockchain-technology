import "./About.css";

function About() {
  return (
    <div className="about-container">

      <h1>About E-Governance System</h1>

      <div className="about-card">
        <p>
          The E-Governance System is a digital platform designed to provide
          citizens with easy access to government services online.
          It helps reduce paperwork, save time, and improve transparency
          between citizens and government departments.
        </p>

        <h2>Our Mission</h2>
        <p>
          To make government services accessible, efficient, secure,
          and transparent through digital technology.
        </p>

        <h2>Services Offered</h2>
        <ul>
          <li>Birth Certificate Application</li>
          <li>Death Certificate Application</li>
          <li>Income Certificate</li>
          <li>Caste Certificate</li>
          <li>Domicile Certificate</li>
          <li>Property Tax Payment</li>
          <li>Public Complaint Management</li>
          <li>Government Scheme Information</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>24/7 Online Access</li>
          <li>Fast Processing</li>
          <li>Reduced Paperwork</li>
          <li>Secure Data Management</li>
          <li>Transparent Service Tracking</li>
        </ul>

        <h2>Contact Information</h2>
        <p>Email: support@egovernance.com</p>
        <p>Phone: +91 9876543210</p>
      </div>

    </div>
  );
}

export default About;