import "./category.css";
import grocery from ".././icon/grocery.webp";
import  mobile from ".././icon/mobile.webp";
import faction from ".././icon/faction.webp";
import electronics from ".././icon/electronics.webp";
import home from ".././icon/home.webp";
import appliances from ".././icon/appliances.webp";
import travel from ".././icon/travel.webp";
import offers from ".././icon/top offers.webp";
import toys from ".././icon/toys.webp";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Category=()=>{
    const [onenter2,setonenter2]=useState(false);
    const [onenter3,setonenter3]=useState(false);
    const [onenter4,setonenter4]=useState(false);
    const [on3,seton3]=useState(false);
    const [on4,seton4]=useState(false);
    const [on5,seton5]=useState(false);
    const [on6,seton6]=useState(false);
    const [on7,seton7]=useState(false);
    const [on8,seton8]=useState(false);
    const [on9,seton9]=useState(false);
 const funenter2=()=>{
         setonenter2(!onenter2)
     }
 const funleave2=()=>{
        setonenter2(!onenter2);
     }
const funenter3=()=>{
        setonenter3(!onenter3)
    }
const funleave3=()=>{
       setonenter3(!onenter3);
    }
const funenter4=()=>{
        setonenter4(!onenter4)
    }
const funleave4=()=>{
       setonenter4(!onenter4);
    }
const fun3=()=>{
        seton3(!on3)
    }
   const fun4=()=>{
        seton3(!on3)
    }
    const funfoote=()=>{
        seton4(!on4)
    }
    const funfootl=()=>{
        seton4(!on4)
    }
    const funfootman=()=>{
        seton5(!on5)
    }
    const funfootmanl=()=>{
        seton5(!on5)
    }
    const funfootman2=()=>{
        seton6(!on6)
    }
    const funfootmanl2=()=>{
        seton6(!on6)
    }
    const funfootman3=()=>{
        seton7(!on7)
    }
    const funfootmanl3=()=>{
        seton7(!on7)
    }
    const funfootman4=()=>{
        seton8(!on8)
    }
    const funfootmanl4=()=>{
        seton8(!on8)
    }
    const funfootman5=()=>{
        seton9(!on9)
    }
    const funfootmanl5=()=>{
        seton9(!on9)
    }
        return(< div className="cover">
            <div className="category">
                <li className="l"><Link to="/grocery"><img src={grocery}></img><p className="blue">Grocery</p></Link></li>
                <li className="l" ><Link to="/about/mobile"><img src={mobile}></img><p className="blue">Mobile</p></Link></li>
                <li className="l" onMouseEnter={funenter2} onMouseLeave={funleave2} ><Link to="/faction"><img src={faction}></img><p className="blue">Fashion {onenter2==true?<FontAwesomeIcon icon={faChevronUp} className="down"/>:<FontAwesomeIcon icon={faChevronDown} className="down"/>} </p></Link>
                {
                    onenter2==true?
                    <>   <div className="tri"></div>
                        <div className="factionlist">
                        <li  className="x"  onMouseEnter={fun3}  onMouseLeave={fun4}><p>Womens Wear  {on3==true?<FontAwesomeIcon icon={faChevronUp} rotation={90} size="2xs" className="arrow" />:<></>}</p>  
                          {
                            on3==true? 
                            <div className="womens-weary-list">
                            <li className="wo"> Iteams in Womens Wear</li>
                            <li>
                                <p>All</p>
                            </li>
                            <li>
                                <p>Dresses</p>
                            </li>
                            <li> <p>Indian-Wear</p></li>
                            <li><p>Jeans</p></li>
                            <li><p>Tops</p></li>
                            <li><p>Shirts</p></li>
                            <li><p>Lingerie</p></li>
                          </div>:<></>
                          }
                         </li>  
                        <li onMouseEnter={funfoote}  onMouseLeave={funfootl} ><p>Womens Footwear  {on4==true?<FontAwesomeIcon icon={faChevronUp} rotation={90} size="2xs" className="arrow" />:<></>}</p>
                          {
                            on4==true? 
                            <div className="womens-weary-list">
                            <li className="wo"> Iteams in Foot Wear</li>
                            <li>
                                <p>All</p>
                            </li>
                            <li>
                                <p>Women Flates</p>
                            </li>
                            <li> <p>Women Heels</p></li>
                            <li><p>Women shoes</p></li>
                            <li><p>womens Slipers </p></li>
                            <li><p>Women Ethnic shoes</p></li>
                            <li><p> Women Ballerinas</p></li>
                          </div>:<></>
                          }
                        </li>
                        <li onMouseEnter={funfootman}  onMouseLeave={funfootmanl}> <p>Mens Wear   {on5==true?<FontAwesomeIcon icon={faChevronUp} rotation={90} size="2xs" className="arrow" />:<></>}</p>
                          {
                            on5==true? 
                            <div className="womens-weary-list">
                            <li className="wo"> Iteams in Foot Mens-Wear</li>
                            <li>
                                <p>All</p>
                            </li>
                            <li>
                                <p>Men's T-Shirts</p>
                            </li>
                            <li> <p>Men's Shirts</p></li>
                            <li><p>Men's Jeans</p></li>
                            <li><p>womens Shorts </p></li>
                            <li><p>Men's Ethnic Wear</p></li>
                            <li><p> Men's Touser</p></li>
                          </div>:<></>
                          }

                        </li>
                        <li  onMouseEnter={funfootman2}  onMouseLeave={funfootmanl2}><p>Means Footwear  {on6==true?<FontAwesomeIcon icon={faChevronUp} rotation={90} size="2xs" className="arrow" />:<></>}</p>

                        {
                            on6==true? 
                            <div className="womens-weary-list">
                            <li className="wo"> Iteams in Foot Mens-Wear</li>
                            <li>
                                <p>All</p>
                            </li>
                            <li>
                                <p>Men' Sportshoes</p>
                            </li>
                            <li> <p>Men's Slipers</p></li>
                            <li><p>Men's Sandal</p></li>
                            <li><p>Mens Foemal shoes </p></li>
                            <li><p>Men's Ethnic Wear</p></li>
                            <li><p> Men's Casula shoes</p></li>
                          </div>:<></>
                          }

                        </li>
                        <li  onMouseEnter={funfootman3}  onMouseLeave={funfootmanl3}><p>Kids  {on7==true?<FontAwesomeIcon icon={faChevronUp} rotation={90} size="2xs" className="arrow" />:<></>}</p>
                        {
                            on7==true? 
                            <div className="womens-weary-list">
                            <li className="wo"> Iteams in  Kids-Wear</li>
                            <li>
                                <p>All</p>
                            </li>
                            <li>
                                <p>Girls Wear</p>
                            </li>
                            <li> <p>Boys Wear</p></li>
                            <li><p>Girls Ethnic Wear</p></li>
                            <li><p>Boys Ethnic Wear</p></li>
                            <li><p>Boys Foot-Wear</p></li>
                            <li><p> Girls Foot-Wear</p></li>
                          </div>:<></>
                          }

                        </li>
                        <li onMouseEnter={funfootman4}  onMouseLeave={funfootmanl4}><p>Watches and Accessories  {on8==true?<FontAwesomeIcon icon={faChevronUp} rotation={90} size="2xs" className="arrow" />:<></>}</p>
                        
                        {
                            on8==true? 
                            <div className="womens-weary-list">
                            <li className="wo">  Watches Aand Accessories</li>
                            <li>
                                <p>All</p>
                            </li>
                            <li>
                                <p>Women Watches</p>
                            </li>
                            <li> <p>Men's Watches</p></li>
                            <li><p>Women SunGlasses</p></li>
                            <li><p>Men's SunGlasses</p></li>
                            <li><p>Mens Jewellery</p></li>
                            <li><p> Women Jewellery</p></li>
                          </div>:<></>
                          }
                        </li>
                       <li  onMouseEnter={funfootman5}  onMouseLeave={funfootmanl5}><p>Bags and Suitcase  {on9==true?<FontAwesomeIcon icon={faChevronUp} rotation={90} size="2xs" className="arrow" />:<></>}</p>
                         {
                            on9==true? 
                            <div className="womens-weary-list">
                            <li className="wo">  Watches Aand Accessories</li>
                            <li>
                                <p>All</p>
                            </li>
                            <li>
                                <p>Women Handbags</p>
                            </li>
                            <li> <p>Men's Handbags</p></li>
                            <li><p>School  Bags</p></li>
                            <li><p>Suitcase</p></li>
                            <li><p>Wallets</p></li>
                            <li><p> Slingbags</p></li>
                          </div>:<></>
                          }                  
                       </li>
                   </div>
                    </>
                   :<></>
                 }
                
                </li>
                  
                <li className="l" onMouseEnter={funenter3} onMouseLeave={funleave3}><a><img src={electronics}></img><p className="blue">Electronics {onenter3==true?<FontAwesomeIcon icon={faChevronUp} className="down"/>:<FontAwesomeIcon icon={faChevronDown} className="down"/>}</p></a>
                     {
                        onenter3==true? <div className="g">
                        <li><p>Laptop</p></li>
                        <li><p>Mobile</p></li>
                        <li><p>HeadPhones</p></li>
                        <li><p>Vedio Games</p></li>
                        <li><p>Camras & Accessories</p></li>
                        <li><p>KeyBord & Mouse</p></li>
                     
                     
                     </div>:<></>
                     
                     }
                     
                     
                
                </li>
                <li className="l" onMouseEnter={funenter4} onMouseLeave={funleave4} ><a><img src={home}></img><p  className="blue">Home & Furnitur {onenter4==true?<FontAwesomeIcon icon={faChevronUp} className="down"/>:<FontAwesomeIcon icon={faChevronDown} className="down"/>}</p></a>
                    {
                        onenter4==true?
                        <div className="e">
                        <li><p>All</p></li>
                        <li><p>Table</p></li>
                        <li><p>Chair</p></li>
                        <li><p>Bed</p></li>
                        <li><p>BedSheet</p></li>
                        <li><p>Blanket</p></li>
                        </div>:<></>
                    }
                  
                </li>
                <li className="l"><Link to="/about/appliances" ><img src={appliances}></img><p  className="blue">Appliances</p></Link></li>
                <li className="l"><Link to="/user"><img src={travel}></img><p  className="blue">Travel</p></Link></li>
                <li className="l"><Link to="/home"><img src={offers}></img><p  className="blue">Top-offers</p></Link></li>
                <li className="l"><Link to="/widgets"><img src={toys}></img><p  className="blue">toys & beuty </p></Link></li>

              
            </div>
        </div>)
}
export default Category;