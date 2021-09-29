import "./Popular section.css"
import img1 from "../image/p-1.jpg"
import img2 from "../image/p-2.jpg"
import img3 from "../image/p-3.jpg"
import img4 from "../image/p-4.jpg"
import img5 from "../image/p-5.jpg"
import img6 from "../image/p-6.jpg"
import { useState } from "react"
import Sectionlist from "./Sectionlist"

const Popular = () => {
    const [populars,setPopular] = useState ([
        {
            id:"1",
            price:"¢ 100",
            images:img1,
            title:"tasty burgar",
        },

        {
            id:"2",
            price:"¢ 100",
            images:img2,
            title:"tasty cakes"
        },
       {
            id:"3",
            price:"¢ 100",
            images:img3,
            title:"tasty sweets"
        },

        {
            id:"4",
            price:"¢ 100",
            images:img4,
            title:"tasty cupcakes"
        },

        {
            id:"5",
            price:"¢ 100",
            images:img5,
            title:"cold drinks"
        },

        {
            id:"6",
            price:"¢ 100",
            images:img6,
            title:"cold ice-cream"
        },
    ]) 

    return (  
     <div id="section3" className="popular">
        <h1 className="heading">most <span>popular</span>foods</h1>
     <div className="box-contanier">
        {populars.map((popular)=> (
               
         <Sectionlist
         id={popular.id}
         price={popular.price}
         images ={popular.images}
         title ={popular.title}
         />
        ))}
            
        </div>
     </div>

    );
}
 
export default Popular;