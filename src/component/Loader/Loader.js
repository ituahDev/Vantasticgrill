  import "./Loader.css";
  import image from "../image/loader.gif";

 
 
  const Loader = () => {
    
     return ( 
          <div className="loader-container">
                 <div> <img src={image}/> </div>
          </div>
      );
 }
  
 export default Loader;


