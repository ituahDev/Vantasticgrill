import { HashLink } from 'react-router-hash-link';
const Sectionlist= (props) => {
    return ( 
    <div className="box">
        <span className='price'>{props.price}</span>
        <img src={props.images} alt="" />
        <h3>{props.title}</h3>
     <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
     </div>
     <HashLink smooth to='/order/#section6'> <a href="#" className="btn">order now</a></HashLink>
 </div>         
     );
}
 
export default Sectionlist;