import "./dash.css";
import "/hand-solid-24.png";
import "/home-alt-2-regular-24.png";
import "/palette-solid-24.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const {userName}=useParams();
  const [patients, setPatients] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/patients`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched patient count:", data);
        setPatients(data);
      })
      .catch((err) => {
        console.log("Failed to fetch patient count", err);
      });
  }, []);

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
              <div className="per">
                <input
                
                  type="text"
                  className="search-input"
                  placeholder="Search by name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="main-top1">
            <i className="fas fa-user-cog"></i>
          </div>
        </div>

        <section className="attendance">
          <div className="attendance-list">
            <h1>All Appointment List</h1>
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
                {filteredPatients.map((patient, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{patient.name}</td>
                    <td>{patient.doctor}</td>
                    <td>{patient.email}</td>
                    <td>
                      <select>
                        <option>Status</option>
                        <option>Approved</option>
                        <option>Rejected</option>
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

export default Search;
