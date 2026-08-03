import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Jobform.css";

function AddJob() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "",
    location: "",
    date: "",
    salary: "",
    jobLink: "",
    notes: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:5000/job/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      navigate("/Dashboard");
    } else {
      alert(data.message);
    }
  }

  return (

    <div className="job-page">

      <div className="job-container">

        <h2>Add Job</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />

          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
          />

          <input
            type="text"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
          />

          <input
            type="text"
            name="jobLink"
            placeholder="Job Link"
            value={formData.jobLink}
            onChange={handleChange}
          />

          <textarea
            name="notes"
            placeholder="Notes"
            value={formData.notes}
            onChange={handleChange}
          />

          <button type="submit">
            Add Job
          </button>

        </form>

      </div>

    </div>

  );
}

export default AddJob;