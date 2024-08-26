
import doc1 from "/d1.jpg";
import doc2 from "/d2.jpg";
import doc3 from "/d3.jpg";

function Doctors(){
    return(
<div className="doc" id="doctors">
<div className="doctors">
    <p>
 OUR DOCTORS
    </p>
</div>
<div className="doctorsp">
    <p>
    Incilint sapiente illo quo praesentium officiis laudantium nostrum, ad adipisci cupiditate sit, quisquam aliquid. Officiis laudantium fuga <br></br>
    ad voluptas aspernatur error fugiat quos facilis saepe quas fugit, beatae id quisquam.
    </p>
</div>

<div className="alldocs">
<div className="doc1">
<img src={doc1}alt=""/>
</div>
<div className="doc2">
<img src={doc2}alt=""/>
</div>
<div className="doc3">
<img src={doc3}alt=""/>
</div>
</div>
<div className="docbutton">
  <button>View all</button>
</div>

</div>
    )
}
export default Doctors;