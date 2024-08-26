import Navbar from '../components/navbar';
import Home from '../components/home';
import Department from '../components/department';
import About from "../components/about";
import Doctors from '../components/doc';
import Contact from '../components/contact';
import Testimonial from '../components/testimonial';
import Footer from '../components/footer';
import Login from '../components/login';
import "../App.css";

function Userhome() {
  return (
    <>
<Navbar/>
<Home/>
<Department/>
<About/>
<Doctors/>
<Contact/>
<Testimonial/>
<Footer/>
    </>
  )
}
export default Userhome;
