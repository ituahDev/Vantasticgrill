import "./Navbar.css"
import { HashLink } from 'react-router-hash-link';
import  image from "../image/vantasic-preview.png";
import { useState } from "react"

const Navbar = () => {

    const [mobileclassname, setmobileclassname] = useState("links")
  
    return (
        <nav className="navbar">
            {/* <a href="/" className="logo"><i className="fas fa-utensils"></i>Food</a> */}
            <img src={image} alt="" />
            <div onClick={()=>{
                if(mobileclassname.includes("linkmobileactive")){
                    setmobileclassname("links");
                }
                else{
                    setmobileclassname("links linkmobileactive");
                }
            }} className="menu-bar"><i className="fas fa-bars"></i></div>
            
            <div  className={mobileclassname}>
                
                <HashLink  onClick={()=>{ setmobileclassname("links")}} smooth to='/home/#section1'>home</HashLink>
                <HashLink  onClick={()=>{ setmobileclassname("links")}} smooth to='/speciality/#section2'>speciality</HashLink>
                <HashLink  onClick={()=>{ setmobileclassname("links")}} smooth to='/popular/#section3'>popular</HashLink>
                <HashLink  onClick={()=>{ setmobileclassname("links")}} smooth to='/gallery/#section4'>gallery</HashLink>
                <HashLink  onClick={()=>{ setmobileclassname("links")}} smooth to='/review/#section5'>review</HashLink>
                <HashLink  onClick={()=>{ setmobileclassname("links")}} smooth to='/order/#section6'>order</HashLink>
            
            </div>
        </nav> 
     ); 
}
 
export default Navbar;