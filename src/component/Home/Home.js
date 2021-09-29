import "./Home.css"
import burgar from '../image/burgar.png';
import { HashLink } from 'react-router-hash-link';

const Home = () => {


    return ( 
    <div id="section1" className="home">
       <div className="content">
           <h3>vantastic grill</h3>
             <p>Delicious meals are tasty,appetizing, scrumptious, yummy, luscious, decetable, mouth-watering, fit for a king, delightful,lovely,wonderful,pleasant and enjoyable.</p>
             <HashLink smooth to='/order/#section6'><a href="#" className="btn">order now</a></HashLink>
       </div>
        <div className="image">
             <img src={burgar} alt="" />
        </div>
    </div>
     );

}
 
export default Home;