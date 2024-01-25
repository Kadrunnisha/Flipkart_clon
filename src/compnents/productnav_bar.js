import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronDown,faChevronUp,faHeart,faStar,faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons'
import "./product.css";
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const Navbar=()=>{
    const [o1,seto1]=useState(false);
    const [o2,seto2]=useState(false);
    const [o3,seto3]=useState(false);
    const [o4,seto4]=useState(false);
    const [o5,seto5]=useState(false);
    const [o6,seto6]=useState(false);
    const [pro,setpro]=useState([]);

    const {id}=useParams();
  
    const electenter=()=>{
        seto1(!o1);
    }
    const electleave=()=>{
        seto1(!o1);
    }
    const enter2=()=>{
        seto2(!o2);
    }
    const leave2=()=>{
        seto2(!o2);
    }
    const enter3=()=>{
        seto3(!o3);
    }
    const leave3=()=>{
        seto3(!o3);
    }
    const enter4=()=>{
        seto4(!o4);
    }
    const leave4=()=>{
        seto4(!o4);
    }
    const enter5=()=>{
        seto5(!o5);
    }
    const leave5=()=>{
        seto5(!o5);
    }
    const enter6=()=>{
        seto6(!o6);
    }
    const leave6=()=>{
        seto6(!o6);
    }
    
    const st2={"width":"200px","max-height":"150px"}
    return(
        <>
        <div className="container">
            
                <div className="menu">
                  <li onMouseEnter={electenter} onMouseLeave={electleave}>
                   <a className="menu-iteam" href="#"><p>Elecronics</p>  {
                        o1==true?<FontAwesomeIcon icon={faChevronUp} className='sign'/>:<FontAwesomeIcon icon={faChevronDown} className='sign' />}</a>
                        {
                            o1==true? <div className="elect" >
                            <li><Link to="/laptop"><p>Laptop</p></Link></li>
                            <li><Link to="/laptop"><p>Mobile</p></Link></li>
                            <li><Link to="/laptop"><p>HeadPhones</p></Link></li>
                            <li><Link to="/laptop"><p>Vedio Games</p></Link></li>
                            <li><Link to="/laptop"><p>Camras & Accessories</p></Link></li>
                            <li><Link to="/laptop"><p>KeyBord & Mouse</p></Link></li>
                         
                         
                         </div>:<></>
                         
                         }
                     </li>
                     <li onMouseEnter={enter2} onMouseLeave={leave2}> <a className="menu-iteam"><p>TV&Appliances</p>{
                         o2==true?<FontAwesomeIcon icon={faChevronUp} className='sign'/>:<FontAwesomeIcon icon={faChevronDown} className='sign' />}</a>
                         {
                             o2==true? <div className="elect" >
                                 <li><Link to="/laptop"><p>Laptop</p></Link></li>
                             <li><Link to="/laptop"><p>Mobile</p></Link></li>
                             <li><Link to="/laptop"><p>HeadPhones</p></Link></li>
                             <li><Link to="/laptop"><p>Vedio Games</p></Link></li>
                             <li><Link to="/laptop"><p>Camras & Accessories</p></Link></li>
                             <li><Link to="/laptop"><p>KeyBord & Mouse</p></Link></li>
                           
                          
                          
                          </div>:<></>
                          
                          }
                     
                     </li> 
                  <li onMouseEnter={enter3} onMouseLeave={leave3}> <a className="menu-iteam"><p>Women</p>{
                  o3==true?<FontAwesomeIcon icon={faChevronUp} className='sign'/>:<FontAwesomeIcon icon={faChevronDown} className='sign' />}</a>
                         {
                             o3==true? <div className="elect" >
                            
                            <li><Link to="/laptop"><p>Dresses</p></Link></li>
                             <li><Link to="/laptop"><p>Top&T-shirt</p></Link></li>
                             <li><Link to="/laptop"><p>Jeans</p></Link></li>
                             <li><Link to="/laptop"><p>Indian Wear</p></Link></li>
                             <li><Link to="/laptop"><p>Womens-Footware</p></Link></li>
                             <li><Link to="/laptop"><p>Lingerie</p></Link></li>
                          
                          </div>:<></>
                          
                          }

                  </li>
                  <li onMouseEnter={enter4} onMouseLeave={leave4}> <a className="menu-iteam"><p>Men</p>{
                        o4==true?<FontAwesomeIcon icon={faChevronUp} className='sign'/>:<FontAwesomeIcon icon={faChevronDown} className='sign' />}</a>
                        {
                            o4==true? <div className="elect" >
                            <li><Link to="/laptop"><p>Mens-Tshirt</p></Link></li>
                            <li><Link to="/laptop"><p>Mens-Shirt</p></Link></li>
                            <li><Link to="/laptop"><p>Jeans</p></Link></li>
                            <li><Link to="/laptop"><p>Tousers</p></Link></li>
                            <li><Link to="/laptop"><p>Men's Ethnic Wear</p></Link></li>
                            <li><Link to="/laptop"><p>Men's Footware</p></Link></li>
                         
                         
                         </div>:<></>
                         
                         }
                  </li>
                  <li onMouseEnter={enter5} onMouseLeave={leave5}> <a className="menu-iteam"><p>Baby&Kids</p>{
                  o5==true?<FontAwesomeIcon icon={faChevronUp} className='sign'/>:<FontAwesomeIcon icon={faChevronDown} className='sign' />}</a>
                         {
                             o5==true? <div className="elect" >
                             <li><Link to="/laptop"><p>Girls Wear</p></Link></li>
                             <li><Link to="/laptop"><p>Boys Wear</p></Link></li>
                             <li><Link to="/laptop"><p> kid Footware</p></Link></li>
                             <li><Link to="/laptop"><p>Bady Products</p></Link></li>
                             <li><Link to="/laptop"><p>Toys</p></Link></li>
                             {/* <li><Link to="/laptop"><p>KeyBord & Mouse</p></Link></li> */}
                          
                          
                          </div>:<></>
                          
                          }
                  </li>
                  <li onMouseEnter={enter6} onMouseLeave={leave6}> <a className="menu-iteam"><p>Home&Furnitur</p>{
                  o6==true?<FontAwesomeIcon icon={faChevronUp} className='sign'/>:<FontAwesomeIcon icon={faChevronDown} className='sign' />}</a>
                         {
                             o6==true? <div className="elect" >
                             <li><Link to="/laptop"><p>Table</p></Link></li>
                             <li><Link to="/laptop"><p>Chair</p></Link></li>
                             <li><Link to="/laptop"><p>Bed</p></Link></li>
                             <li><Link to="/laptop"><p>BedSheet</p></Link></li>
                             <li><Link to="/laptop"><p>Blanket</p></Link></li>
                             <li><Link to="/laptop"><p>Household Product</p></Link></li>
                          
                          
                          </div>:<></>
                          
                          }
                  </li>
                  <li> <a className="menu-iteam"><p>Sports,books&More</p></a></li>
                  <li> <a className="menu-iteam"><p>Flights</p></a></li>
                  <li> <a className="menu-iteam"><p>offer Zone</p></a></li>
                </div>
        </div>
     </>)
}
export default Navbar;