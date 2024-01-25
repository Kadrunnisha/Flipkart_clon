import "./app.css";

import React, { useEffect, useState } from "react";
import Tittlebar2 from "./compnents/tittlebar2";
import Tittlebar from "./compnents/tittlebar";
import Category from "./compnents/category";
import Slid from "./compnents/slid";
import Slider from "./compnents/sliders";
import Product from "./compnents/product";
import Slid2 from "./compnents/slid2";
import Navbar from "./compnents/productnav_bar";
import Filter from "./compnents/filter"
import Product2_com from "./compnents/productcom";


import  laptop from "./image/laptop.webp";
import  shoes from "./image/shoes.webp";
import  Chair from "./image/chair.webp";
import  m from "./image/m.webp";
import  camra from "./image/camra.webp";
import  softtoy from "./image/softtoy.webp";
import  fr from "./image/fr.webp";
import  mobile from "./image/mobile.webp";
import  dresss1 from "./image/./fashion/dresss1.webp";
import  watch from "./image/./fashion/watch-men.webp";
import  jeans from "./image/./fashion/jeans.webp";
import  headphone from "./image/headphone.webp";
import  mouse from "./image/mouse.webp";
import  greentee from "./image/greentee.webp";
import  mentshirt from "./image/./fashion/men-tshirt.webp";
import  table from "./image/table.webp";
import  jewalary from "./image/jewalary.webp";
import  bed from "./image/bed.webp";
import  wotshirt from "./image/./fashion/t-shirt.webp";
import  sandal from "./image/sandal.webp";
import phone1 from "./image/phone1.webp";
import phone2 from "./image/phone4.webp";
import phone3 from "./image/phoneoopo3.webp";
import tv from "./image/./appliances/tv1.webp";
import tv2 from "./image/./appliances/tv2.webp";
import  phone4 from "./image/./fashion/applephone.webp";
import  phone5 from "./image/./fashion/phonerealme.webp";
import  phone6 from "./image/./fashion/redmiphone.webp";

import { Routes, Route, useParams } from "react-router-dom";
function App() {
   const i=useParams();
   const {id}=i;
  const[data_set,setdata]=useState([]);
   console.log("hii");
   useEffect(() => {
    fetch('http://localhost:8002/data')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // console.log(data);
            setdata(data);
        })
        .catch(err => {
            console.error('Error fetching data:', err);
        });
}, []);

//    var [data_set,setdata]=useState([]);
//    useEffect(()=>{
//     fetch('http://localhost:8002/data').then(
//         response=>{
//             console.log("hey");
//             return response.json();
//         }
//     ).then(
//         data=>{
//             console.log(data);
//             setdata(data);
//         }
//     ).catch(err=>{
//      console.log('error featching data:',err)
//     })
//    },[]);
   console.log(data_set[3]);
   let arr3 = data_set.length > 11 ? [ data_set[1],data_set[2], data_set[3], data_set[4], data_set[5],
   data_set[6],
   data_set[7],
   data_set[8],
   data_set[9],
   data_set[10]] : [];
  
   let arr4 = data_set.length > 11 ? [ data_set[13], data_set[14], data_set[15], data_set[16],
   data_set[18],
   data_set[19],
   data_set[20],
   data_set[21],data_set[22],data_set[24]] : [];
  
   let arr5 = data_set.length > 11 ? [ data_set[24], data_set[29], data_set[26], data_set[27],

      data_set[28],
      data_set[2],
      data_set[30],
      data_set[31],data_set[28]] : [];
   

   console.log(arr3);
   let arr6 = data_set.length > 11 ? [ data_set[32]
   ] : [];
   console.log(arr6);
    
   let grocery = data_set.length > 8 ? [ 
    data_set[33],
    data_set[34],
    data_set[35],
    data_set[36],
   data_set[37],
   data_set[38],
   data_set[39],
   data_set[40],] : [];

    let arr2=[

        {
           title:"Best of Seassion"
        },
        {
           neme:  "Jeans-Women",
           image1:jeans,
           dis1:20
        }   
        ,
        {
            name2:"HeadPhones",
            image2:headphone,
            dis2:10
        },
      
      
        {
            name10:"Grocery",
            image10:greentee,
            dis10:30
        },
        {
            name4:"Mouse",
            image4:mouse,
            dis4:40
        },
       
        {
            name5 : "Men-Tshirt",
            image5: mentshirt,
            dis5:50
        },
        {
            name6:"Table",
            image6:table,
            dis6:80
        },
        {
            name7:"Jewalary",
            image7:jewalary,
            dis7:60
        },
       
        {
            name8:"Bed",
            image8:bed,
            dis8:60
        },
        {
            name9:"Women-Tshirt",
            image9:wotshirt,
            dis9:20
        },
        {
            name3:"Women-Sandals",
            image3:sandal,
            dis3:40
        }
       
    ]
    // console.log(arr2)
    let moabile=[
        
        {
            imagem:phone1,
            title:"SAMSUNG Galaxy F13(Waterfall Blue,128 GB",
            price:"11,999",
            pricecut:"14,999",
            dis:38,
            rating:4.3,
            li1:"4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
            li2:"16.76 cm (6.6 inch) Full HD+ Display",
            li3:"50MP + 5MP + 2MP | 8MP Front Camera",
            li4:"6000 mAh Lithium Ion Battery",
            li5:"Exynos 850 Processor"
        }
        ,
        {
            imagem:phone2,
            title:"vivo T2x 5G (Aurora Gold, 128 GB)  (8 GB RAM)",
            price:"15,999",
            pricecut:"20,999",
            dis:30,
            rating:4.1,
            li1:"8 GB RAM  128 GB ROM ",
            li2:"16.71 cm (6.6 inch) Full HD+ Display",
            li3:"50MP + 5MP + 2MP | 8MP Front Camera",
            li4:"5000 mAh Lithium Ion Battery",
            li5:"Dimensity 6020 Processor"
        }
        ,
        {
            imagem:phone3,
            title:"OPPO Reno8T 5G (Sunrise Gold, 128 GB)  (8 GB RAM)",
            price:"29,999",
            pricecut:"38,999",
            dis:23,
            rating:4.4,
            li1:"8 GB RAM  128 GB ROM ",
            li2:"17.02 cm (6.7 inch) Full HD+ Display",
            li3:"108MP + 2MP + 2MP | 32MP Front Camera",
            li4:"4800 mAh Lithium Ion Battery",
            li5:"Qualcomm Snapdragon 695 Processor"
        },
        {
            imagem:phone4,
            title:"APPLE iPhone 13 (Pink, 128 GB)",
            price:"60,999",
            pricecut:"69,999",
            dis:12,
            rating:4.7,
            li1:"8 GB ROM ",
            li2:"15.49 cm (6.1 inch) Super Retina XDR Display",
            li3:"12MP + 12MP | 12MP Front Camera",
            li4:"4800 mAh Lithium Ion Battery",
            li5:"A15 Bionic Chip Processor"
        },
        {
            imagem:phone5,
            title:"realme C30 (Denim Black, 32 GB)  (2 GB RAM)",
            price:"5,999",
            pricecut:"8,999",
            dis:29,
            rating:3.2,
            li1:"2 GB RAM | 32 GB ROM | Expandable Upto 1 TB ",
            li2:"16.51 cm (6.5 inch) HD+ Display",
            li3:"8MP Rear Camera | 5MP Front Camera",
            li4:"5000 mAh Lithium Ion Battery",
            li5:"Unisoc T612 Processor"
        },
        {
            imagem:phone6,
            title:"REDMI Note 10 Pro Max (Dark Nebula, 128 GB)  (6 GB RAM)",
            price:"19,999",
            pricecut:"22,999",
            dis:13,
            rating:3.8,
            li1:"6 GB RAM | 32 GB ROM | Expandable Upto 1 TB ",
            li2:"16.94 cm (6.5 inch) HD+ Display",
            li3:"108MP Rear Camera | 16MP Front Camera",
            li4:"5020 mAh Lithium Ion Battery",
            li5:"Qualcomm Snapdragon 732G Processo"
        }
    ]
    let appliances=[
        { imagem:tv,
          title:"Compaq 109 cm (43 inch) Full HD LED Smart Coolita TV with Dolby Audio,WCG+,Screen Casting,Experience Stabilisation Engine  (CQV43FDS)",
          price:"13,999",
          pricecut:"25,990",
          dis:46,
          rating:4.3,
          li1:"Supported Apps: Prime Video|Youtube",
          li2:"Operating System: Coolita",
          li3:"Resolution: Full HD 1920 x 1080 Pixels",
          li4:"Sound Output: 14 W",
          li5:"Refresh Rate: 60 Hz"
        },
        { imagem:tv2,
            title:"Compaq 109 cm (43 inch) Full HD LED Smart Coolita TV with Dolby Audio,WCG+,Screen Casting,Experience Stabilisation Engine  (CQV43FDS)",
            price:"13,999",
            pricecut:"25,990",
            dis:46,
            rating:4.3,
            li1:"Supported Apps: Prime Video|Youtube",
            li2:"Operating System: Coolita",
            li3:"Resolution: Full HD 1920 x 1080 Pixels",
            li4:"Sound Output: 14 W",
            li5:"Refresh Rate: 60 Hz"
          }


    ]
    var [windowwidth,setwindowwidth]=useState(window.innerWidth);
     const fun=()=>{
        setwindowwidth(window.innerWidth);
     }
    useEffect(() => {
        // function handleResize() {
        //   setwindowwidth(windowwidth);
        // }
        
        window.addEventListener('resize', fun);
        return () => window.removeEventListener('resize', fun);
      }, []);
    return (   <div>
        {windowwidth>576?<Tittlebar/>:<Tittlebar2/>}
        <Routes>
            <Route path="/" element={<><Category>   
        </Category>
        <Slid  ></Slid>
        <Slider array={arr3}></Slider>
        <Slider array={arr4}></Slider>
        <Slid2></Slid2>
        <Slider array={arr5}></Slider>
        
        </>}/>
        
        <Route path="/about/:id"  element={<><Product tim={{moabile,appliances}} ></Product></>}></Route>
        <Route path="/grocery" element={<><Navbar></Navbar>
        <Filter array={arr6}></Filter>
        <Product2_com array={grocery}></Product2_com>
        </>}/>
        <Route path="/laptop" element={<><h1>ghjkjk</h1></>}/>
        {/* <Route path="/about/:id"  element={<><Product{...moabile[0]} {...mobile[0]} {...moabile[2]} {...moabile[3]} {...moabile[4]} {...moabile[5]} {...moabile[6]} ></Product></>}></Route> */}
        {/* <Route path="/about/:id"  element={<><Product{...moabile[0]} {...appliances[0]} {...moabile[2]} {...moabile[3]} {...moabile[4]} {...moabile[5]} {...moabile[6]} ></Product></>}></Route> */}
       
        </Routes>
        
    </div>);
}
export default App;