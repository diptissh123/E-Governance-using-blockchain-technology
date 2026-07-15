import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import "./Register";
import { FaEye, FaEyeSlash } from "react-icons/fa";



function Login(){
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loginData, setLogindata]= useState ({
    email : "",
    password: "",

  });
  const handleChange =(e) => {
    setLogindata({
      ...loginData,
      [e.target.name] : e.target.value,
    });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:8084/E-Governance/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      }
    );
    
    const data = await response.json();
console.log("Response Status:", response.status);
console.log("Response Data:", data);
    if (response.ok) {

      // console.log(localStorage.getItem("token"));
      // console.log(localStorage.getItem("role"));
  console.log(data.userId);

localStorage.setItem("token", data.token);
localStorage.setItem("role", data.role);
localStorage.setItem("userId", data.userId);
      

      alert("Login Successful");

      switch (data.role) {
        case "CITIZEN":
          navigate("/citizen-dashboard");
          break;

        case "OFFICER":
          navigate("/officer-dashboard");
          break;

        case "ADMIN":
          navigate("/admin-dashboard");
          break;

        default:
          navigate("/");
      }

    } else {
      alert(data.message || "Invalid Email or Password");
    }

  } catch (error) {
    console.error("Login Error:", error);
    alert("Server Error");
  }
};

  
  return(

    <div className="login-container">
      <div className="login-card">
        <h2>E-Governance System</h2>
        <p>Login to Continue</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={loginData.email}
           onChange={handleChange}
            required/>
          </div>
           <div className="form-group">
    <div>
      <label>Password</label>

      <div className="password-field">
         <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter Password"
          value={loginData.password}
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
</div>
          <button type="Submit" className="login-btn">Login</button>
        </form>
        <div className="links">
            <a href="/Register">Register</a>
        </div>
      </div>
    </div>
  );
}
export default Login;