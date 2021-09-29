const Reviewlist = (props) => {
    return ( 
        <div className="box" >
                    <img src={props.image} alt="" />
                    <h3>john doe</h3>
                    <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                 <p>{props.content}</p>
                </div>
     );
}
 
export default Reviewlist;