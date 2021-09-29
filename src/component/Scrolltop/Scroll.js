import "./Scroll.css"

const Scroll = () => {
      
    return (  
        <div className="scroll-top" onClick={()=>{
            window.scrollTo(0, 0)
        }}>
            <i class="fas fa-angle-up"></i> 
     </div>
   );
}
 
export default Scroll;