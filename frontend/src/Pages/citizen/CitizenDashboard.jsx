import "./CitizenDashboard.css";

import { useNavigate } from "react-router-dom";

function CitizenDashboard() {

  const navigate = useNavigate();


  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>E-Governance</h2>

        <ul>
          <li onClick={() => navigate("/view-schemes")}>
            View Schemes
          </li>

          <li onClick={() => navigate("/apply-scheme")}>
            Apply Scheme
          </li>

          <li onClick={() => navigate("/apply-scheme")}>
            Certificates
          </li>

          <li onClick={() => navigate("/my-applications")}>
            My Applications
          </li>

          <li onClick={() => navigate("/feedback")}>
            Feedback
          </li>

          <li onClick={() => navigate("/profile")}>
            Profile
          </li>
        </ul>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">

        <div className="topbar">
          <h1>Citizen Dashboard</h1>
        </div>

<div className="certificate-section">
  <h2>Apply for Certificates</h2>

  <div className="certificate-buttons">

    <button
      onClick={() => navigate("/certificate/INCOME")}
    >
      Income Certificate
    </button>

    <button
      onClick={() => navigate("/certificate/CASTE")}
    >
      Caste Certificate
    </button>

    <button
      onClick={() => navigate("/certificate/DOMICILE")}
    >
      Domicile Certificate
    </button>

    <button
      onClick={() => navigate("/certificate/BIRTH")}
    >
      Birth Certificate
    </button>

  </div>
</div>

      </div>

    </div>
  );
}

export default CitizenDashboard;