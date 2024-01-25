import "./slid2.css";
import banner1 from ".././image/banner1.webp";
import banner2 from ".././image/banner2.webp";
import banner3 from ".././image/banner3.webp";
function Slid2() {
    return(<div className="container-slid2">
        <div className="banner"><a href="#"><img src={banner1}></img></a></div>
        <div className="banner"><a href="#"><img src={banner2}></img></a></div>
        <div className="banner"><a href="#"><img src={banner3}></img></a></div>
    </div>)
}
export default Slid2;