import { useParams } from "react-router-dom";
import "./ApplyScheme.css";

function ApplyScheme() {
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

const application = {
  userId: Number(localStorage.getItem("userId")),
  schemeId: Number(id)
};
console.log(localStorage.getItem("userId"));

console.log(application);

    console.log(application);

    try {
      const response = await fetch(
        "http://localhost:8084/E-Governance/apply",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify(application)
        }
      );

      if (response.ok) {
        alert("Application Submitted Successfully");
      } else {
        alert("Failed to submit application");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="apply-container">
      <div className="apply-card">
        <h2>Apply For Scheme</h2>

        <form onSubmit={handleSubmit}>
          <p>Do you want to apply for this scheme?</p>

          <button type="submit" className="submit-btn">
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplyScheme;