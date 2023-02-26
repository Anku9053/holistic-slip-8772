import { Routes, Route } from "react-router-dom";
// import Home from "../Pages/Homepage";
// import About from "../Pages/About";
// import Contact from "../Pages/Contacts";
// import Login from "../Pages/Login";
// import Users from "../Pages/Users";
// import UsersPage from "../Pages/UsersPage";
// import NotFound from "../Pages/NotFound";
// // import PrivateRoutes from "../Components/PrivateRoutes";
// import ProductDetails from "../Cities/ProductDetails";


import Cities from "../Cities/Cities";
// import ProductDetails from "../Cities/ProductDetails";
import Homepage from "../Components/Homepage";
import Checkout from "../Components/Checkout";

function AllRoutes() {






  return (
    <Routes>
      <Route
        path="/product"
        element={

          <Cities />

        }
      ></Route>
      <Route
        path="/"
        element={

          <Homepage />

        }
      ></Route>
      <Route
        path="/checkout"
        element={

          <Checkout />

        }
      ></Route>
      
      





    </Routes>
  );
}

export default AllRoutes;
