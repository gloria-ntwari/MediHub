
import { Link } from "react-router-dom";        

function Navbar(){
    return(
        <div className="navContainer">
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      ></link>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
      <div className="heading">
        <h>MediHub</h>
      </div>
      <ul className="links">
        <li><a href="#home">Home</a></li>
        <li><a href="#department">Department</a></li>  
        <li><a href="#about">About</a></li>
        <li><a href="#doctors">Doctors</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
        </div>

    )
}
export default Navbar;