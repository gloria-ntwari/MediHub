
import depart1 from "/s1.png";
import depart2 from "/s2.png";
import depart3 from "/s3.png";
import depart4 from "/s4.png";
function Department(){
    return (
    <div id="department">
        
    <div className="depart">
        <p>Our Departments</p>
    </div>
    <div className="depart1">
        <p>Asperiores sunt consectetur impedit nulla molestiae delectus repellat laborum dolores doloremque accusantium</p>
    </div>
    <div className="all1">
    <div className="circ1">
        <img src={depart1} alt=""/>
        <p>CARDIOLOGY</p>
        <h1>fact that a reader will be distracted 
        by the readable page when looking
        at its layout</h1>
    </div>
    <div className="circ2">
        <img src={depart2} alt=""/>
        <p>DIAGNOSIS</p>
        <h1>fact that a reader will be distracted 
        by the readable page when looking
        at its layout</h1>
    </div>
    <div className="circ3">
        <img src={depart3} alt=""/>
        <p>SURGERY</p>
        <h1>fact that a reader will be distracted 
        by the readable page when looking
        at its layout</h1>
    </div>
    <div className="circ4">
        <img src={depart4} alt=""/>
        <p>FIRST AID</p>
        <h1>fact that a reader will be distracted 
        by the readable page when looking
        at its layout</h1>
    </div>
    </div>
    <div className="view">
        <button>Read more</button>
    </div>
    </div>
    )
}
export default Department;