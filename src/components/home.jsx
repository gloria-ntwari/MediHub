
import hero from "/hero-bg.png";
import Navbar from "./navbar";



function Home(){
    return (
        
  <div id="home">
    <Navbar/>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
    ></link>
   <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
   <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
   <div className="hero">
    <img src={hero} alt=""/>
   </div>
   <div className="fore">
        <p>
          WE PROVIDE BEST<br></br>
          HEARTHCARE<br></br>  
        </p>
    </div>
    <div className="fore1">
        <p>
        Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat <br></br>
        aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto<br></br>
        repellat modi impedit sequi. 
        </p>
    </div>
    <div className="read">
      <button>Read more</button>
    </div>
  </div>
    );
}
export default Home;