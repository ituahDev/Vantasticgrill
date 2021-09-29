import { useState } from "react";
import "./Review.css"
import img1 from "../image/pic1.png"
import img2 from "../image/pic2.png"
import img3 from "../image/pic3.png"
import Reviewlist from "./Reviewlist"

const Review = () => {
    const[review] =useState([
        {
            id:1,
            image:img1,
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, minus. Nulla ullam vel, molestias saepe iste modi unde molestiae officiis?"
        },
        {
            id:1,
            image:img2,
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, minus. Nulla ullam vel, molestias saepe iste modi unde molestiae officiis?"
           },
           {
            id:1,
            image:img3,
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, minus. Nulla ullam vel, molestias saepe iste modi unde molestiae officiis?"
           },
    ])
    return ( 
        <div id="section5"  className="review">

           <h1 className="heading">our customers <span>reviews</span></h1>

           <div className="box-container">
               
               {review.map((reviews)=>(
                <Reviewlist
                id={reviews.id}
                image={reviews.image}
                content={reviews.content}
                />
               ))}
           </div>
        </div>
     );
}
 
export default Review;