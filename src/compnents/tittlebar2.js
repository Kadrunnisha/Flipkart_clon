import "./tittlebar2.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faStore,faUser,faChevronUp,faHeart,faCartShopping, faChevronDown,faCircleUser, faBagShopping,faCreditCard,faGift} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
const Tittlebar2=()=>{
      const [on1, setonoff]=useState(false);
      const fun=()=>{
        setonoff(!on1);
      }
      const [colo, setcolor]=useState(0);
      const f=()=>{
        setcolor(1);
      }
    return(<>
        <div className="header2">
            <lable className="lable">
                Flipkart.com
            </lable>
            <div className="headerlink">
            <li>
                <a href="#">
                <FontAwesomeIcon icon={faStore}  className="il"/>
                </a>
            </li>
            <li>
                <a href="#" onClick={fun}> <FontAwesomeIcon icon={faUser} className="il" />
                {
                    on1==false?<FontAwesomeIcon icon={faChevronDown}  className="il"/>:<FontAwesomeIcon icon={faChevronUp}  className="il"/>
                }
                
                </a>
            </li>
            {on1==true?
                 <>
                 <div className="triangle"></div>
                 <div className="Dropdown2">
                    <li className="login"   ><p>old customer?</p><a href="#" > Login</a>
                 </li>
                 
                 <li><a href="#" className="link"><FontAwesomeIcon icon={faCircleUser} size="xs"  className="ic"/>
                 <p>My Profile</p>
                 </a></li>
                 <li>
                     <a href="#" className="link">
                     <FontAwesomeIcon icon={faBagShopping}  className="ic"/>
                     <p>Orders</p>
                     </a>
                 </li>
                 <li>
                     <a href="#" className="link">
                     <FontAwesomeIcon icon={faCreditCard} size="xs"  className="ic"/>
                     <p>Rewards</p>
                     </a>
                 </li>
                 <li> 
                     <a href="#"  className="link"><FontAwesomeIcon icon={faGift}  className="ic"/>
                     <p>Gift</p>
                     </a>
                 </li>
              </div>
              </>
              :<></>
             }
            <li>
                <a><FontAwesomeIcon icon={faHeart}  className="il"/></a>
            </li>
            <li>
                <a><FontAwesomeIcon icon={faCartShopping}  className="il"/></a>
            </li>
            </div>

          
        </div>
        {
            on1==false?   <div className="searchbar3">
               
            
            <ul className="searchbar4">
                <li className="icon2">
                
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </li>
               <li >
                  
                  <input type="text" className="input2"  placeholder="Search for Products,Brands and More"></input>
               </li> 
            </ul>
            </div>:<></>
          } 
        
        </>
    )
        
    
}
export default Tittlebar2;