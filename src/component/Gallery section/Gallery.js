import { HashLink } from 'react-router-hash-link';
import { useState } from "react";
import "./Gallery.css"
import img1 from "../image/g-1.jpg"
import img2 from "../image/g-2.jpg"
import img3 from "../image/g-3.jpg"
import img4 from "../image/g-4.jpg"
import img5 from "../image/g-5.jpg"
import img6 from "../image/g-6.jpg"
import img7 from "../image/g-7.jpg"
import img8 from "../image/g-8.jpg"
import img9 from "../image/g-9.jpg"



const Gallery = () => {
  const[sections] =useState ([
      {
          id:1,
          image: img1,
          title:"tasty food",
          content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, pariatur!"
      },
      {
        id:2,
        image: img2,
        title:"tasty food",
        content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, pariatur!"
    },
    {
        id:3,
        image: img3,
        title:"tasty food",
        content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, pariatur!"
    },
    {
        id:4,
        image: img4,
        title:"tasty food",
        content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, pariatur!"
    },
    {
        id:5,
        image: img5,
        title:"tasty food",
        content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, pariatur!"
    },
    {
        id:6,
        image: img6,
        title:"tasty food",
        content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, pariatur!"
    },
    {
        id:7,
        image: img7,
        title:"tasty food",
        content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, pariatur!"
    },
    {
        id:8,
        image: img8,
        title:"tasty food",
        content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, pariatur!"
    },
    {
        id:9,
        image: img9,
        title:"tasty food",
        content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, pariatur!"
    },
  ])

    return ( 
      <div id="section4" className="gallery">

          <h1 className="heading">our food <span>gallery</span></h1>

          <div className="box-container">
              {sections.map((section)=>(
                 <div className="box" key={section.id}>
                 <img src={section.image} alt="" />
                 <div className="content">
                      <h3>{section.title}</h3>
                      <p>{section.content}</p>
                      <HashLink smooth to='/order/#section6'><a href="#" className="btn">order now</a></HashLink>
                 </div>
            </div>
              ))}
             
            
         </div>
      </div>
     );
}
 
export default Gallery;