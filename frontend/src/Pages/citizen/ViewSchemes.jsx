
import { useNavigate } from "react-router-dom";
import "./ViewSchemes.css";
import { useEffect, useState } from "react";



function ViewSchemes() {

  const [schemes, setSchemes] = useState([]);
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {

    fetch("http://localhost:8084/E-Governance/schemes", {
      headers: {
        "Authorization":
          `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((response) => response.json())
      .then((data) => setSchemes(data))
      .catch((error) => console.error(error));

  }, []);

  const handleDelete = async (id) => {

  const confirmDelete =
    window.confirm(
      "Are you sure you want to delete this scheme?"
    );

  if (!confirmDelete) return;

  try {

    const response = await fetch(
      `http://localhost:8084/E-Governance/delete-scheme/${id}`,
      {
        method: "DELETE",
        headers: {
          "Authorization":
            `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    if (response.ok) {

      alert("Scheme Deleted Successfully");

      setSchemes(
        schemes.filter(
          scheme => scheme.id !== id
        )
      );

    } else {

      alert("Delete Failed");

    }

  } catch (error) {

    console.error(error);
    alert("Server Error");

  }
};


  return (
    <div className="schemes-container">

      <h2>Government Schemes</h2>

      <table className="scheme-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Scheme Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Eligibility</th>
            <th>Benefit Amount</th>
            <th>Last Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {schemes.map((scheme) => (

            <tr key={scheme.id}>
              <td>{scheme.id}</td>
              <td>{scheme.schemeName}</td>
              <td>{scheme.category}</td>
              <td>{scheme.description}</td>
              <td>{scheme.eligibility}</td>
              <td>₹{scheme.benefitAmount}</td>
              <td>{scheme.lastDate}</td>
              <td>{scheme.status}</td>
              <td>
                  {role === "ADMIN" && (
                    <>
                      <button
                        className="edit-btn"
                        onClick={() =>
                          navigate(`/update-scheme/${scheme.id}`)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(scheme.id)
                        }
                      >
                        Delete
                      </button>
                    </>
                  )}

                  {role === "CITIZEN" && (
                    <>
                      <button
                        className="apply-btn"
                        onClick={() =>
                          navigate(`/apply-scheme/${scheme.id}`)
                        }
                      >
                        Apply
                      </button>
                    </>
                  )}

                </td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ViewSchemes;