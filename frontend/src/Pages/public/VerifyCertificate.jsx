import { useState } from "react";
import "./VerifyCertificate.css";

function VerifyCertificate() {

  const [certificateId, setCertificateId] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [message, setMessage] = useState("");

  const verifyCertificate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/api/certificates/verify/${certificateId}`
      );

      if (response.ok) {
        const data = await response.json();
        setCertificate(data);
        setMessage("Certificate Verified Successfully");
      } else {
        setCertificate(null);
        setMessage("Certificate Not Found");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server Error");
    }
  };

  return (
    <div className="verify-container">
      <div className="verify-card">

        <h2>Certificate Verification</h2>

        <form onSubmit={verifyCertificate}>
          <input
            type="text"
            placeholder="Enter Certificate ID"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
            required
          />

          <button type="submit">
            Verify Certificate
          </button>
        </form>

        {message && (
          <p className="message">{message}</p>
        )}

        {certificate && (
          <div className="certificate-details">

            <h3>Certificate Details</h3>

            <p>
              <strong>Certificate ID:</strong>
              {certificate.certificateId}
            </p>

            <p>
              <strong>Student Name:</strong>
              {certificate.studentName}
            </p>

            <p>
              <strong>Course:</strong>
              {certificate.course}
            </p>

            <p>
              <strong>Institute:</strong>
              {certificate.instituteName}
            </p>

            <p>
              <strong>Issue Date:</strong>
              {certificate.issueDate}
            </p>

            <p className="verified">
              ✅ Verified & Authentic
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default VerifyCertificate;