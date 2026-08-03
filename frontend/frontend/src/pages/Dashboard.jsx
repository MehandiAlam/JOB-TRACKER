import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Dashboard.css"


function Dashboard() {

    const navigate = useNavigate();

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchJobs() {

        setLoading(true);

        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:5000/job", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        setJobs(data);

        setLoading(false);
    }

    const deleteJob = async (id) => {

        const token = localStorage.getItem("token");

        try {

            const response = await fetch(`http://localhost:5000/job/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                fetchJobs();
            } else {
                alert(data.message);
            }

        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        fetchJobs();
    }, []);

    if (loading) {

        return (

            <div className="loader-page">

                <div className="loader"></div>

            </div>

        );

    }

    return (

        <div className="dashboard">

            <div className="dashboard-header">

                <h1>Welcome to Dashboard</h1>

                <Link to="/AddJob" className="add-btn">
                    Add Job
                </Link>

            </div>

            <div className="jobs">

                {jobs.map((job) => {

                    return (

                        <div className="job-card" key={job._id}>

                            <h3>{job.company}</h3>

                            <p>
                                <strong>Role:</strong> {job.role}
                            </p>

                            <p>
                                <strong>Status:</strong>
                            </p>

                            <span className={`badge ${job.status.toLowerCase()}`}>
                                {job.status}
                            </span>

                            <p>
                                <strong>Location:</strong> {job.location}
                            </p>

                            <div className="buttons">

                                <button
                                    className="edit-btn"
                                    onClick={() => navigate(`/EditJob/${job._id}`)}
                                >
                                    EDIT
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteJob(job._id)}
                                >
                                    DELETE
                                </button>

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );
}

export default Dashboard;