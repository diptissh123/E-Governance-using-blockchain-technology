import { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({});
  const role = localStorage.getItem("role");

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    fetch(`http://localhost:8084/E-Governance/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
            />
          </div>

          <h2>{user.name}</h2>
          <p>{user.role}</p>
        </div>

        <div className="profile-details">
<div className="detail-box">
  <span>Name</span>
  <p>{user.name}</p>
</div>

<div className="detail-box">
  <span>Email</span>
  <p>{user.email}</p>
</div>

<div className="detail-box">
  <span>Mobile</span>
  <p>{user.mobile}</p>
</div>

<div className="detail-box">
  <span>Aadhaar Number</span>
  <p>{user.aadhaar}</p>
</div>

<div className="detail-box">
  <span>Address</span>
  <p>{user.address}</p>
</div>

{/* Show only for Officer */}
{role === "OFFICER" && (
  <>
    <div className="detail-box">
      <span>Department</span>
      <p>{user.department}</p>
    </div>

    <div className="detail-box">
      <span>Designation</span>
      <p>{user.designation}</p>
    </div>

    <div className="detail-box">
      <span>Status</span>
      <p>{user.status}</p>
    </div>
  </>
)}
        </div>
      </div>
    </div>
  );
}

export default Profile;