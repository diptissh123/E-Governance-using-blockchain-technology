import { useState } from "react";
import "./Feedback.css";

function Feedback() {
  const [feedback, setFeedback] = useState({
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(feedback);

    // API Call
    // fetch("http://localhost:8084/E-Governance/feedback",{
    //   method:"POST",
    //   headers:{
    //      "Content-Type":"application/json",
    //      Authorization:`Bearer ${localStorage.getItem("token")}`
    //   },
    //   body:JSON.stringify(feedback)
    // })

    alert("Thank you for your feedback!");

    setFeedback({
      rating: "",
      comment: "",
    });
  };

  return (
    <div className="feedback-container">
      <div className="feedback-card">
        <h2>Feedback Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Rating</label>
            <select
              name="rating"
              value={feedback.rating}
              onChange={handleChange}
              required
            >
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Good</option>
              <option value="3">⭐⭐⭐ Average</option>
              <option value="2">⭐⭐ Poor</option>
              <option value="1">⭐ Very Poor</option>
            </select>
          </div>

          <div className="form-group">
            <label>Comments</label>
            <textarea
              name="comment"
              value={feedback.comment}
              onChange={handleChange}
              placeholder="Write your feedback..."
              rows="5"
              required
            />
          </div>

          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;