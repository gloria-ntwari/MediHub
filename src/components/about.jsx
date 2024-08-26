import aboutpng from "/about-img.jpg";
function About(){
    return(
    <div id="about">
    <div className="aboutpng">  
    <img src={aboutpng} alt=""/>
    </div>
    <div className="aboutp">
        <p>ABOUT</p>
    </div>
    <div className="aboutp2">
        <p>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
        </p>
    </div>
    <div className="button2">
        <button>Read more</button>
    </div>
    </div>
    )
}
export default About;