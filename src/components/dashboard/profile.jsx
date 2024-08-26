import "./dash.css";
import "/9706583.png"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Profile() {
  const {userName} = useParams();
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/doctorlogin`)
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
      })
      .catch((err) => {
        console.log("Failed to fetch doctor data", err);
      });
  }, []);

  const handleEdit = (doctor) => {
    if (doctor) {
      setSelectedDoctor(doctor);
      setShowPopup(true);
    } else {
      console.error("Doctor data is null");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedDoctor(null);
  };
  const handleSave = () => {
    fetch(`http://localhost:3000/updateDoctors`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: selectedDoctor._id,  // Ensure selectedDoctor._id is defined
        name: selectedDoctor.name,  // Ensure selectedDoctor.name is defined
        email: selectedDoctor.email,  // Ensure selectedDoctor.email is defined
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to update doctor');
        }
      })
      .then((updatedDoctor) => {
        // Update state with the updated doctor
        setDoctors(
          doctors.map((doc) => (doc._id === updatedDoctor._id ? updatedDoctor : doc))
        );
        setSelectedDoctor(updatedDoctor);
        handleClosePopup();
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
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
        <div className="users">
          <div className="card">
            <img src="/9706583.png" alt="User" />
            <h4></h4>
            <p>Doctor's Profile</p>

           
          </div>
        </div>
        <div className="main-top1">
          <i className="fas fa-user-cog"></i>
        </div>

        </div>
        <section className="attendance">
          <div className="attendance-list">
            <h1>Doctor List</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor, index) => (
                  <tr key={doctor._id}>
                    <td>{index + 1}</td>
                    <td>{doctor.name}</td>
                    <td>{doctor.email}</td>
                    <td>
                      <button onClick={() => handleEdit(doctor)}>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>

      {showPopup && selectedDoctor && (
        <>
          <div className="popup-background" onClick={handleClosePopup}></div>
          <div className="popup">
            <div className="popup-content">
              <h2>Edit Doctor Information</h2>
              <label>Name:</label>
              <input
                type="text"
                value={selectedDoctor.name || ''}
                onChange={(e) =>
                  setSelectedDoctor({ ...selectedDoctor, name: e.target.value })
                }
              />
              <label>Email:</label>
              <input
                type="email"
                value={selectedDoctor.email || ''}
                onChange={(e) =>
                  setSelectedDoctor({ ...selectedDoctor, email: e.target.value })
                }
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleClosePopup} className="close-button">
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
