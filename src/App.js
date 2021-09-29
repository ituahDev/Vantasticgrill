import Navbar from '../src/component/Navbar/Navbar'
import Gallery from './component/Gallery section/Gallery';
import Home from './component/Home/Home';
import Order from './component/Order/Order';
import Popular from './component/Popular section/Popular section';
import Review from './component/Review/Review';
import Speciality from './component/speciality/Speciality';
import Step from './component/Step section/Step section';
import Footer from "./component/Footer/Footer";
import {BrowserRouter as Router,Route, Switch,} from 'react-router-dom';
import Scroll from './component/Scrolltop/Scroll';
import Loader from './component/Loader/Loader';
import {useEffect, useState} from "react"
function App() {

  const[isPendig, setIsPending] = useState(true)

 useEffect(() => { 
   setTimeout(() => setIsPending(false), 2000)
 }, []);

  return (
    <Router>
    <div className="App">
      {
        isPendig && <Loader/>
      }
    
      < Navbar/>
      <div className="content">
        <Switch>
           <Route path="/">
           
               <Home />
                 <Speciality/>
                  <Popular />
                  <Step />
                   <Gallery />
                   <Review />
                   <Order />
                   <Footer />
                 <Scroll />
                 
           </Route>
        </Switch>

       
           
      </div>
    </div>
    </Router>
  );
}

export default App;
