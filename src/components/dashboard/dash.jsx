import "./dash.css";
import "/hand-solid-24.png";
import "/home-alt-2-regular-24.png";
import "/palette-solid-24.png";
import "/doctor.png";
import "/163000.png";
import "/1572334.png";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function Dash() {
  const {userName} = useParams();
  const [totalPatients, setTotalPatients] = useState(0);
  const [totalDoctors, setTotalDoctors] = useState();
  const [recent, setRecent] = useState();
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate(); // Use useNavigate for redirection
  
  useEffect(() => {
    console.log(userName)
    fetch(`http://localhost:3000/doctors/${userName}/patients/count`)
      .then((response) => response.json())
      .then((data) => {
        console.log("hello my data", userName)
        console.log("Fetched patient count:", data);
        setTotalPatients(data.count);
      })
      .catch((err) => {
        console.log("Failed to fetch patient count", err);
      });
  }, [userName]);

  useEffect(() => {
    fetch(`http://localhost:3000/doctors/count`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched doctor count:", data);
        setTotalDoctors(data.count);
      })
      .catch((err) => {
        console.log("Failed to fetch doctor count", err);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/patients/toDay/count`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched today's patient count:", data);
        setRecent(data.count);
      })
      .catch((err) => {
        console.log("Failed to fetch today's patient count", err);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/patients/toDay`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched today's patients:", data);
        setPatients(data);
      })
      .catch((err) => {
        console.log("Failed to fetch today's patients", err);
      });
  }, []);

  // Logout function
  const handleLogout = () => {
    // Clear any user data (e.g., tokens) here
    localStorage.removeItem("userToken"); // Example: remove token from localStorage

    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="contain">
      <nav>
        <ul>
          <li>
            <a href="#" className="logo">
              <span className="nav-item">Admin</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-menorah"></i>
              <span className="nav-item">
                <Link to={`/dashboard/${userName}`}>Dashboard</Link>
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-comment"></i>
              <span className="nav-item">
                <Link to={`/dashboard/${userName}/search`}>Search</Link>
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-database"></i>
              <span className="nav-item">
                <Link to={`/dashboard/${userName}/report`}>Report</Link>
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-cog"></i>
              <span className="nav-item">
                <Link to={`/dashboard/${userName}/profile`}>Profile</Link>
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="logout" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
              <span className="nav-item1">Log out</span>
            </a>
          </li>
        </ul>
      </nav>

      <section className="main">
        <div className="attend">
          <div className="main-top">
            <i className="fas fa-user-cog"></i>
          </div>
          <div className="users">
            <div className="card">
              <img src="/163000.png" alt="User" />
              <h4></h4>
              <p>Total patients</p>
              <div className="per">
                <button id="prof">{totalPatients}</button>
              </div>
            </div>
          </div>
          <div className="main-top1">
            <i className="fas fa-user-cog"></i>
          </div>
          <div className="users">
            <div className="card" id="card1">
              <img src="/doctor.png" alt="User" />
              <h4></h4>
              <p>ALL DOCTORS</p>
              <div className="per">
                <button id="prof">{totalDoctors}</button>
              </div>
            </div>
          </div>
          <div className="users">
            <div className="card" id="card2">
              <img src="/1572334.png" alt="User" />
              <h4></h4>
              <p>RECENT APPOINTMENTS</p>
              <div className="per">
                <button id="prof">{recent}</button>
              </div>
            </div>
          </div>
        </div>

        <section className="attendance">
          <div className="attendance-list">
            <h1>Recent Appointment List</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Doctor</th>
                  <th>Email</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{patient.name}</td>
                    <td>{patient.doctor}</td>
                    <td>{patient.email}</td>
                    <td>
                      <select>
                        <option id="status">Status</option>
                        <option id="status">Approved</option>
                        <option id="status">Rejected</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Dash;
