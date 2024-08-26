
import location from "/location-plus-regular-24.png";
import facebook from "/facebook-logo-24 (2).png";
import instagram from "/instagram-alt-logo-24 (2) - Copy.png";
import linked from "/linkedin-logo-24 - Copy.png";
import twitter from "/twitter-logo-24 (1).png";
function Footer(){
return(
    < div className="footer">
    <div className="reach">
    <p id="p1">Reach at..</p>
    <img src={location} alt="" id="location"/>
    <p id="p2">Location</p>
    <img src={location} alt="" id="location2"/>
    <p id="p3">Call</p>
    <img src={location} alt="" id="location3"/>
    <p id="p4">demo@gmail.com</p>
    </div>
    <div className="social">
  <img src={facebook} alt="" className="social-icon"/>
  <img src={instagram} alt="" className="social-icon"/>
  <img src={linked} alt="" className="social-icon"/>
  <img src={twitter} alt="" className="social-icon"/>
</div>    
   <div className="footabout">
<h>About</h>
<p>Beatae provident nobis mollitia magnam voluptatum, unde dicta facilis 
    minima veniam corporis laudantium alias tenetur eveniet illum reprehenderit 
    fugit a delectus officiis blanditiis ea.</p>
    </div>
    <div className="footlinks">
      <h>Links</h>
      <p id="link1"> Home &nbsp; &nbsp; &nbsp;  About</p>
      <p id="link2">Departments</p>
      <p id="link3">Doctors &nbsp; &nbsp; ContactUs</p>
    </div>
    <div className="footersub">
       <h>News letter</h>
       <input type="text" id="text1" placeholder="Enter email"/>
       <input type="text" id="text2" placeholder="Subscribe"/>
    </div>
    <div className="reg">
        <p>© 2024 All Rights Reserved By Free Html Templates</p>
    </div>
    <div className="reg1">
        <p>© Distributed By ThemeWagon</p>
    </div>
    </div>
)
}
export default Footer;