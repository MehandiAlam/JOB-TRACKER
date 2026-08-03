import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/Jobform.css";
import "../css/Spinner.css";

function EditJob() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {

    setLoading(true);

    fetch(`http://localhost:5000/job/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCompany(data.company);
        setRole(data.role);
        setStatus(data.status);
        setLocation(data.location);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

  }, [id]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(`http://localhost:5000/job/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          company,
          role,
          status,
          location,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Job Updated Successfully");
        navigate("/Dashboard");
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.log(error);
    }

  };

  if (loading) {
    return (
      <div className="loader-page">
        <div className="loader"></div>
      </div>
    );
  }

  return (

    <div className="job-page">

      <div className="job-container">

        <h2>Edit Job</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <input
            type="text"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <button type="submit">
            Update Job
          </button>

        </form>

      </div>

    </div>

  );
}

export default EditJob;