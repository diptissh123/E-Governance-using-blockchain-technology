import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [registerData, setRegisterData] = useState({
    name: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
  aadhaar: "",
  address: ""
  });

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        if (
          registerData.password !==
          registerData.confirmPassword
        ) {
          alert("Passwords do not match");
          return;
        }
        if (registerData.aadhaar.length !== 12) {
        alert("Aadhaar Number must be 12 digits");
        return;
        }
        if (registerData.mobile.length !== 10) {
          alert("Mobile Number must be 10 digits");
          return;
        }


    try {
      const response = await fetch(
        "http://localhost:8084/E-Governance/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        }
      );


      const message = await response.text();

      if (response.ok) {
        

       navigate("/");
        alert("Registration Successful");
        console.log(message);

        setRegisterData({
          name: "",
          email: "",
          mobile: "",
          password: "",
          confirmPassword: "",
          aadhaar: "",
          address: ""
        });

      } else {
        alert(message);
      }
      

    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>E-Governance System</h2>
        <p>Create New Account</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              value={registerData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={registerData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
           <input
              type="text"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={registerData.mobile}
              onChange={handleChange}
              maxLength="10"
              required
            />
          </div>

         <div className="form-group">
            <label>Password</label>

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={registerData.password}
                onChange={handleChange}
                required
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="form-group">
              <label>Confirm Password</label>

              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={registerData.confirmPassword}
                onChange={handleChange}
                required
              />
          </div>
          <div className="form-group">
            <label>Aadhaar Number</label>

            <input
              type="text"
              name="aadhaar"
              placeholder="Enter Aadhaar Number"
              value={registerData.aadhaar}
              onChange={handleChange}
              maxLength="12"
            />
          </div>
          <div className="form-group">
            <label>Address</label>

           <textarea
              name="address"
              placeholder="Enter Address"
              value={registerData.address}
              onChange={handleChange}
              rows="3"
            />
  
          </div>
         

          <button type="submit" className="register-btn">
            Register
          </button>

        </form>

        <div className="links">
          <a href="/">Already have an account? Login</a>
        </div>

      </div>
    </div>
  );
}

export default Register;