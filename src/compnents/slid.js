import laptop from ".././icon/laptop.webp";
import smartphone from ".././icon/smartphone.jpg";
import flit from ".././icon/flit.webp";
import ic from ".././icon/i.webp";
import slid1 from ".././icon/slid1.avif";
import bl from ".././icon/bl.webp";
import fli from ".././icon/s.webp";
import tv from ".././icon/tv.webp";
import { useEffect, useState } from "react";
import "./slid.css"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'








const Slid=()=>{
    const arr=[laptop, tv,flit,fli, bl];
    const [i, seti]=useState(0);
    useEffect(()=>{
       const y= setTimeout(()=>{
           seti((i+1)%(arr.length));    
        },3000)
        return()=>{clearTimeout(y)}
    },[i])
  
    return(
            <div className="slide2">
                <button className="bu1" onClick={ ()=>{
                    if(i==0){
                        seti(arr.length-1);
                    }
                    else{
                        seti((i-1)%(arr.length-1))
                    }
                  
                }}><FontAwesomeIcon icon={faChevronUp} rotation={270}  className="af"/></button>
                 <img src={arr[i]}></img>
                <button className="bu2" onClick={()=>{
                    seti((i+1)%(arr.length-1))
                }}
                ><FontAwesomeIcon icon={faChevronUp} rotation={90}  className="af"/></button>
               
            </div>
    )
}
export  default Slid ;