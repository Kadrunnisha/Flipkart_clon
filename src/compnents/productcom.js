import "./productcom.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faIndianRupeeSign,faHeart
} from '@fortawesome/free-solid-svg-icons'
 import Filter from "./filter";
 import phone1 from ".././image/gr.webp";
 import flipkart from ".././image/./fashion/flipkart.png";
const Product2_com=(props)=>{
  if(props.array.length>0){
    return(
        <> 
          <div className="container_box">
            <div className="heading"><p>{props.array[0].brand}</p></div>
           
            <div className="container_productcom">
            {props.array.map((item, index) => (
             <div className="com1" key={index}>
                <div className="image_box">
                   
                    <img src={item.image}></img>
                    <div><FontAwesomeIcon icon={faHeart}  className="he" /></div>
                </div>
                 <p className="name_of_product">{item.name}</p>
                 <p className="quantity">{item.quantity} </p>
                 <div className="ratingcontainer"><div className="green"><p>{item.Rating}</p><FontAwesomeIcon  className=" star-rat" icon={faStar} /></div> <p className="rating_number">{item.rating_number}</p></div>
                 <img src={flipkart} className="flipkart"></img>
                 <div className="price_container"> 
                 <div> <FontAwesomeIcon icon={faIndianRupeeSign} className='r' /><p className="nor">{item.price}</p></div> 
                 <div><FontAwesomeIcon icon={faIndianRupeeSign} className='ru' /><p className="cut">{item.price_cut}</p></div>
                 <div><p className="dis">{item.dis}% off</p></div>
                 </div>
             </div> 
             ))}
           </div>

         </div>
        </>
  
    )
    } 
}
export default Product2_com;