
import "./dash.css";
import "/hand-solid-24.png"
import "/home-alt-2-regular-24.png"
import "/palette-solid-24.png"
import "/1572334.png"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Report() {
  const navigate = useNavigate();
  const {userName} = useParams();
  const [patients, setPatients] = useState([]);

  
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
    const handleRemove = (id) => {
        fetch(`http://localhost:3000/patients`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }), // Send the ID in the request body
        })
          .then((response) => {
            if (response.ok) {
              setPatients((prevPatients) =>
                prevPatients.filter((patient) => patient._id !== id)
              );
            } else {
              console.log("Failed to remove appointment");
            }
          })
          .catch((err) => {
            console.log("Error:", err);
          });
      };
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
                  <span className="nav-item"><Link to={`/dashboard/${userName}`}>Dashboard</Link></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-comment"></i>
                  <span className="nav-item"><Link to={`/dashboard/${userName}/search`}>Search</Link></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-database"></i>
                  <span className="nav-item"><Link to={`/dashboard/${userName}/report`}>Report</Link></span>
                </a>
              </li>
    
              <li>
                <a href="#">
                  <i className="fas fa-cog"></i>
                  <span className="nav-item"><Link to={`/dashboard/${userName}/profile`}>Profile</Link></span>
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

            <div className="main-top1">
              <i className="fas fa-user-cog"></i>
            </div>

            <div className="users">
              <div className="card" id="card2">
                <img src="/1572334.png" alt="User" />
                <h4></h4>
                <p>REPORT OF APPOINTMENTS</p>
                <div className="per">

                </div>
               
              </div>
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
                      <th>email</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((patient,index)=>(
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{patient.name}</td>
                    <td>{patient.doctor}</td>
                    <td>{patient.email}</td>
                    <td>
                    <button onClick={() => handleRemove(patient._id)}>Remove</button>
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

export default Report;