import { useEffect, useState } from "react";
import "./CertificateApplications.css";

function CertificateApplications() {

  const [applications, setApplications] = useState([]);

  const loadApplications = () => {
    fetch("http://localhost:8084/E-Governance/all-certificates", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const approveCertificate = async (id) => {
  await fetch(
    `http://localhost:8084/E-Governance/approve-certificate/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  loadApplications();
};

  const rejectCertificate = async (id) => {
    await fetch(
    `http://localhost:8084/E-Governance/reject-certificate/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  loadApplications();
};

const viewDocument = async (fileName) => {

  console.log("Opening:", fileName);

  const response = await fetch(
    `http://localhost:8084/E-Governance/documents/${fileName}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  );

  console.log(response.status);

  if (!response.ok) {
    alert("Unable to open document");
    return;
  }

  const blob = await response.blob();

  const url = URL.createObjectURL(blob);

  window.open(url, "_blank");
};
  return (
    <div className="applications-container">

      <div className="applications-card">

        <h2>Certificate Applications</h2>

        <table className="applications-table">

          <thead>

            <tr>
              <th>ID</th>
              <th>Citizen Name</th>
              <th>Certificate</th>
              <th>Aadhaar</th>
              <th>Mobile</th>
              <th>Application Date</th>
              <th>Document1</th>
              <th>Document2</th>
              <th>Status</th>
              <th>Action</th>
             
            </tr>

          </thead>

          <tbody>

            {applications.map((app) => (

              <tr key={app.id}>

                <td>{app.id}</td>

                <td>{app.fullName}</td>

                <td>{app.certificateType}</td>

                <td>{app.aadhaar}</td>

                <td>{app.mobile}</td>

                <td>{app.applicationDate}</td>


<td>
  {app.rationCard || app.hospitalCertificate || app.residenceProof ? (
    <button
      onClick={() =>
        viewDocument(
          app.rationCard ||
          app.hospitalCertificate ||
          app.residenceProof
        )
      }
    >
      View
    </button>
  ) : (
    "No File"
  )}
</td>

<td>
  {app.incomeProof || app.casteProof ? (
    <button
      onClick={() =>
        viewDocument(
          app.incomeProof ||
          app.casteProof
        )
      }
    >
      View
    </button>
  ) : (
    "No File"
  )}
</td>
                <td>
                  <span className={`status ${app.status.toLowerCase()}`}>
                    {app.status}
                  </span>
                </td>

                <td>

                  {app.status === "Pending" ? (
                    <>
                      <button
                        className="approve-btn"
                        onClick={() => approveCertificate(app.id)}
                      >
                        Approve
                      </button>

                      <button
                        className="reject-btn"
                        onClick={() => rejectCertificate(app.id)}
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    app.status
                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default CertificateApplications;