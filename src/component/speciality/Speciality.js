 import "./Speciality.css"
 import img from "../image/s-1.png"
 import img2 from "../image/s-img-1.jpg"
 import img3 from "../image/s-img-2.jpg"
 import img4 from "../image/s-2.png"
 import img5 from "../image/s-img-3.jpg"
 import img6 from "../image/s-3.png"
 import img7 from "../image/s-img-4.jpg"
 import img8 from "../image/s-4.png"
 import img9 from "../image/s-img-5.jpg"
 import img10 from "../image/s-5.png"
 import img11 from "../image/s-img-6.jpg"
 import img12 from "../image/s-6.png"
import { useState } from "react"
import Foodlist from "./Foodlist"
 
 const Speciality = () => {
     const [foods] = useState([
         {
             id:"1",
             img1:img2,
             img2:img,
             title:"awesome burgar",
             content:[
                "classic burgar-GHC20", 
                "beef khebab burgar-GHC25",
                "classic burgar and 1 academic side-ghc30 with cheese option-GHC35"
            ]
         },

         {
            id:"2",
            img1:img3,
            img2:img4,
            title:"slayqueen wings",
            content:[
                "chicken (8pcs) and assorted vegetable-GHC30",
                
                "turkey (6pcs) and assorted vegetable -GHC40"
        ]
        },
        {
            id:"3",
            img1:img5,
            img2:img6,
            title:"no stress khebab",
            content:[
                "chicken (2 skewers) and assorted vegetable -GHC 18",
                "beef/pork (2 skewers)and assorted vegetable - GHC 20",
                "seafood on a skewer and assorted vegetables - GHC25",
                "exclusive ( 2 skewers )1 havlved corn 1burger and 1accademic side - GHC40 "
            ]
        },
        {
            id:"4",
            img1:img7,
            img2:img8,
            title:"sliver screen rice",
            content:[
                "friedrice,2pcs chicken, 1halved corn and 1 accademic side -GHC30",
                "vegetable rice,2pc chicken 1 halved corn and 1 accedemic side -GHC35",
                "jollof rice,2pcs chicken,1 havled corn and 1 academic side-GHC35 "
            ]
        },
        {
            id:"5",
            img1:img9,
            img2:img10,
            title:"sharwama",
            content:[
                "chicken-GHC35",
                "beef -GHC35",
                "with cheese option -GHC5"
            ]
        },
        {
            id:"6",
            img1:img11,
            img2:img12,
            title:"action fish",
            content:[
                "grilled catfish, 1 halved corn and 1 academic side- GHC70",
                "grilled tilapia 1 halved corn 1 academic side-GHC50"
            ]
        },
        {
            id:"7",
            img1:img11,
            img2:img12,
            title:"the young godfather chicken",
            content:[
                "stayeasy  (1pc chicken, 1corn, 1burger,2sausages and 1 academic sides)-GHC40",
                "YGF (2pcs chicken, 2halved corns,2burgars,4sausages and2academic sides)-GHC75",
                "bikers (5 chickens,5halved corns,5burgars,1 sausages and 3academic side)-GHC190",
                "avengers (5 pork chops, 5halved corn,5burgers, 10sausages and 3 academic sides)- GHC260"
            ]
        },
        {
            id:"8",
            img1:img11,
            img2:img12,
            title:"academic sides",
            content:[
                "plantains - GHC10",
                "yam chips -GHC10",
                "grilled-sweet potatoes-GHC10"
            ]
        },
        {
            id:"9",
            img1:img11,
            img2:img12,
            title:"the young godfather combo",
            content:[
                "GH (snall on a skewer, halved corn, 1 jumbo prawn, 1turkey and 1 academic side)- GHC70",
                "LIB (2beef/chicken khebab, 1turkey wing,1 jumbo prawn, 1 halved corn and 1 academic side)-GHC60",
                "DUTCH (1 pork chop, 1 jumo prawn 1 turkey wing,1 halved corn and 1 academic side)- GHC70"
            ]
        },
     ])

    return (  

    <div  id="section2" className="speciality">

      <h1 className="heading">our <span>speciality</span></h1>

      <div className="box-container">

        {foods.map((food)=>(
           
            <Foodlist
                id = {food.id} 
                img1bg = {food.img1}
                img2 = {food.img2}
                title = {food.title}
                content ={food.content}
            /> 
        ))}
         
          
         
      
      </div>
    </div>
    );
}
 
export default Speciality;