import "./OfficerDashboard.css";
import { useNavigate } from "react-router-dom";

function OfficerDashboard() {

  const navigate = useNavigate();

  return (
    <div className="officer-dashboard">

      <div className="officer-sidebar">

        <h2>E-Governance</h2>

        <ul>
          <li>Dashboard</li>

          <li onClick={() => navigate("/officer-applications")}>
            Applications
          </li>

          <li onClick={() => navigate("/scheme-applications")}>
           Scheme Applications
          </li>

          <li onClick={() => navigate("/certificate-applications")}>
              Certificate Applications
          </li>

          <li>
            Verify Documents
          </li>

          <li>
            Approvals
          </li>

          <li>
            Reports
          </li>

          <li onClick={() => navigate("/profile")}>
            Profile
          </li>

          <li onClick={() => {
            localStorage.clear();
            navigate("/");
          }}>
            Logout
          </li>
        </ul>

      </div>

      <div className="officer-main-content">

        <div className="officer-header">
          <h1>Officer Dashboard</h1>
          <p>Welcome Officer</p>
        </div>

        <div className="officer-cards">

          <div className="officer-card">
            <h3>Total Applications</h3>
            <p>250</p>
          </div>

          <div className="officer-card">
            <h3>Pending Verification</h3>
            <p>75</p>
          </div>

          <div className="officer-card">
            <h3>Approved</h3>
            <p>120</p>
          </div>

          <div className="officer-card">
            <h3>Rejected</h3>
            <p>55</p>
          </div>

        </div>

        <div className="officer-actions">

          <button>View Applications</button>

          <button>Verify Documents</button>

          <button>Generate Report</button>

        </div>

      </div>

    </div>
  );
}

export default OfficerDashboard;