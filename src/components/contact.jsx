import nurse from "/istockphoto-1425798958-612x612.jpg";
import { useEffect, useState } from "react";

function Contact() {
    const [patientValue, setPatientValue] = useState({
        name: "",
        doctor: "",
        email: "",
        date: "",
        message: ""
    });

    const [doctors, setDoctors] = useState([]); // Holds the list of doctors

    useEffect(() => {
        fetch("http://localhost:3000/doctors")
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setDoctors(data);
                } else {
                    console.error("Data is not an array:", data);
                }
            })
            .catch(err => {
                console.error("Failed to fetch doctors", err);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatientValue(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Patient value before submission:", patientValue);

        fetch("http://localhost:3000/patientLogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patientValue)
        })
            .then(response => response.json())
            .then(() => {
                console.log("User is logged in successfully");
            })
            .catch(err => {
                console.error("User failed to login");
                console.error(err);
            });
    };

    return (
        <div id="contact">
            <div className="get">
                <p>GET IN TOUCH</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <input type="text" name="name" placeholder="Your name" onChange={handleChange} />
                    <input type="date" name="date" placeholder="Date" onChange={handleChange} id="mydate"/>
                </div>
                <div className="inputs1">
                    <input type="email" name="email" placeholder="Your email" onChange={handleChange} />
                    <select name="doctor" onChange={handleChange}>
                        <option value="">Select Doctor</option>
                        {doctors.map(doctor => (
                            <option key={doctor._id} value={doctor.name}>
                                {doctor.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="inputs2">
                    <input type="text" name="message" placeholder="Message" onChange={handleChange} />
                </div>
                <div className="inputs3">
                    <button type="submit">Send</button>
                </div>
            </form>
            <div className="nurse">
                <img src={nurse} alt="Nurse" />
            </div>
        </div>
    );
}

export default Contact;
