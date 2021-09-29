import "./Step section.css"
import img1 from "../image/step-1.jpg"
import img2 from "../image/step-2.jpg"
import img3 from "../image/step-3.jpg"
import img4 from "../image/step-4.jpg"
import { useState } from "react"
const Step= () => {
    const [list]= useState([
        {
            id:1,
            image:img1,
            title: "choose your favorite food"
         },
         {
            id:2,
            image:img2,
            title: "free and fast delivery"
         },
         {
            id:3,
            image:img3,
            title: "easy payments methods"
         },
         {
            id:4,
            image:img4,
            title: "and family, enjoy your foods"
         }
    ])



    return ( 
        <div className="steps">
            {list.map((step)=>(
                <div className="box" key={step.id}>
                <img src={step.image} alt="" />
                <h3>{step.title}</h3>
            </div>
            ))}
           
        </div>
     );
}
 
export default Step ;