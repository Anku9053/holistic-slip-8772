import logo from './logo.svg';
import './App.css';
import Navbar from "../src/Components/Navbar"
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Slider from "./Slider/Slider";
import Checkout from './Components/Checkout';
import Cities from './Cities/Cities';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    
    <div className="App">
      <AllRoutes/>
   {/* <Homepage/> */}
   {/* <Cities/> */}
   {/* <Checkout/> */}
   {/* <Slider/> */}
   {/* <Footer/> */}
    </div>
  );
}

export default App;
