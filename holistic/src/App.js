import logo from './logo.svg';
import './App.css';
import Navbar from "../src/Components/Navbar"
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Slider from "./Slider/Slider";
import Checkout from './Components/Checkout';
import Cities from './Cities.jsx/Cities';


function App() {
  return (
    
    <div className="App">
   {/* <Homepage/> */}
   <Cities/>
   {/* <Checkout/> */}
   {/* <Slider/> */}
   {/* <Footer/> */}
    </div>
  );
}

export default App;
