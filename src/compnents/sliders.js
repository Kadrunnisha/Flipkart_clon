import "./slider.css";
import { useState,useEffect } from "react";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { queries } from "@testing-library/react"
import { useRef } from "react"
import React from "react";

const Slider=(props)=>{
   
  
   console.log(props)

 
  
   const ref=useRef(null);
  
   const funs=()=>{
    let box=ref.current;
       let width=box.clientWidth;
       console.log(width);
       box.scrollLeft=box.scrollLeft-width;
       
   }
   const fu=()=>{
    let box=ref.current;
    let width=box.clientWidth;
    box.scrollLeft=box.scrollLeft+width;
   
}
    return(
        <div className="slid-container">
            <button className="greaterthan" onClick={fu}><FontAwesomeIcon icon={faChevronUp} rotation={90}  className="gre"/></button>
            <div className="namef"><p>Top Deals </p><button className="view">view all</button><button className="lessthen " onClick={funs} ><FontAwesomeIcon icon={faChevronUp} rotation={270}  className="gre"/></button></div>
          <div ref={ref} className="slid"  >
          {props.array.map((item, index) => (
          <div className="fashion-slider" key={index}>
            <a href="#">
              <div>
                <img src={item.image} alt={`item-${index}`} />
                <h3>{item.name}</h3>
                <p> Min.{item.dis}% off</p>
              </div>
            </a>
          </div>
        ))}
      
    </div>
        </div>
   
    )
 }
 export default Slider;