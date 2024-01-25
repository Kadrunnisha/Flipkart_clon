
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import flipkart from ".././image/./fashion/flipkart.png";
import './filter.css';
const Filter=(props)=>{
    if(props.array.length>0){
        return(<>
            <div className='filter_container'>
             <div className='fl1'><p>Filters</p></div>
             <div className='fl2'>
                 <div className='catgory'><p>CATEGORIE</p></div>
                 <div className='catgory_icon'><FontAwesomeIcon icon={faChevronLeft}  className='icon'/><p>{props.array[0].catgory_name}</p></div>
                 </div>
             <div className='fl3'>
                 <div className='price'><p>PRICE</p></div>
                  <div className='price_check'><input type='checkbox'></input><p>Low to high</p></div>
                  <div className='price_check'><input type='checkbox'></input><p> High to Low</p></div>
             </div>
             <div className='fl4'> <img src={flipkart}></img></div>
             <div className='fl5'>
                 <div className='brands'><p>BRAND</p></div>
                 <div className='brand_name'>
                 <div>
                     <input type='checkbox'></input>
                     <p>{props.array[0].brand1}</p>
                 </div>
                 <div>
                     <input type='checkbox'></input>
                     <p>{props.array[0].brand2}</p>
                 </div>
                 <div>
                     <input type='checkbox'></input>
                     <p>{props.array[0].brand3}</p>
                 </div>
                 <div>
                     <input type='checkbox'></input>
                     <p>{props.array[0].brand4}</p>
                 </div>
                 <div>
                     <input type='checkbox'></input>
                     <p>{props.array[0].brand5}</p>
                 </div>
     
                 </div>
                 
             </div>
             <div className='fl6'>
                 <div className='brands'><p> CUSTOMER RATINGS</p></div>
                 <div className='brand_name'>
                 <div>
                     <input type='checkbox'></input>
                     <p>4 &above</p>
                 </div>
                 <div>
                     <input type='checkbox'></input>
                     <p>3 &above</p>
                 </div>
                 </div>
                
             </div>
            </div>
         </>)
    }

   
}
export default Filter;