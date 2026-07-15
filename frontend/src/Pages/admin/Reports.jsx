import "./Reports.css";
import { useEffect, useState } from "react";

function Reports() {

    const [reports, setReports] = useState({});

useEffect(() => {
  fetch("http://localhost:8084/E-Governance/reports", {
    headers: {
      Authorization:
        `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(res => res.json())
    .then(data => setReports(data))
    .catch(err => console.log(err));
}, []);
  return (
    <div className="reports-container">
      <h2>Reports Dashboard</h2>

      <div className="reports-cards">
        <div className="report-card">
          <h3>Total Citizens</h3>
          <p>{reports.totalCitizens}</p>
        </div>

        <div className="report-card">
          <h3>Total Officers</h3>
          <p>{reports.totalOfficers}</p>
        </div>

        <div className="report-card">
          <h3>Total Schemes</h3>
          <p>{reports.totalSchemes}</p>
        </div>

        <div className="report-card">
          <h3>Total Applications</h3>
          <p>{reports.totalApplications}</p>
        </div>

        <div className="report-card">
          <h3>Approved Applications</h3>
          <p>{reports.approvdApplications}</p>
        </div>

        <div className="report-card">
          <h3>Pending Applications</h3>
          <p>{reports.pendingApprovals}</p>
        </div>

        <div className="report-card">
          <h3>Rejected Applications</h3>
          <p>{reports.rejectedApplication}</p>
        </div>
   

        <div className="report-card">
          <h3>Certificate Issued</h3>
          <p>{reports.certificatesIssued}</p>
        </div>
      </div>

      <div className="report-actions">
        <button>Download PDF Report</button>
        <button>Download Excel Report</button>
      </div>
    </div>
  );
}

export default Reports;