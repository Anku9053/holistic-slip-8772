import { useEffect, useState } from "react";
import getData, { addcity, deletecity } from "./api";
import Cityitem from "./Cityitem";
// import addcity from "./api";
import AddCity from "./AddCity";
import "./Cities.css";
// import { Navigate, useNavigate } from "react-router-dom"
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Navbar } from "./Navbar";
import Footer from "../Components/Footer";

function Cities() {
  const [loading, setloading] = useState(false);
  const [total, settotal] = useState(1);
  const [todo, settodo] = useState([]);
  const [page, setpage] = useState(1);
  const [search, setSeacrh] = useState("")
  const navigate = useNavigate()
  // const [page, setpage] = useState(changeNumber(searchParams.get("page")) || 1);
  let [searchParams, setsearchParams] = useSearchParams()

  const [error, seterror] = useState(false);

  const ascending = "population";
  const order = "asc";
  const fetchup = (page) => {
    setloading(true);
    getData({ page: page, limit: 6 })
      .then((res) => {
        settotal(res.headers["x-total-count"]);
        settodo(res.data);
        // settotal(res.headers["x-total-count"])
      })
      .catch((err) => seterror(err))
      .finally(() => setloading(false));
  };
  const [change, setChange] = useState(false)

  const handleSort = (sort, value) => {
    if (sort === 'asc' && value === 'price') {
      todo.sort((a, b) => a.price - b.price)
      setChange(!change)
    };

    if (sort === 'dsc' && value === 'price') {
      todo.sort((a, b) => b.price - a.price)
      setChange(!change)
    };

    if (sort === 'asc' && value === 'name') {
      todo.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      })
      setChange(!change)
    }
    if (sort === 'dsc' && value === 'name') {
      todo.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        } else {
          return -1;
        }
      })
      setChange(!change)

    };
    if (sort === 'asc' && value === 'discount') {
      todo.sort((a, b) => a.discount - b.discount)
      setChange(!change)
    };

    if (sort === 'dsc' && value === 'discount') {
      todo.sort((a, b) => b.discount - a.discount)
      setChange(!change)
    };


  }
  useEffect(() => {
    fetchup(page);
  }, [page]);
  

  const handlepage = (value) => {
    setpage(page + value);
  };

  //   const handleaddcity = (data) => {
  //     addcity(data).then(() => {
  //       fetchup(page);
  //     });
  //   };
  //   const handledeletecity = (id) => {
  //     deletecity(id).then(() => {
  //       fetchup(page);
  //     });
  //   };

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong please try again later or refresh it..</h1>;
  }

  return (

    <div >
      <Navbar/>
      <div className="dropdown1">
            <button className="dropbtn1">Dropdown</button>
            <div className="dropdown-content1">
              <a href="#">Mens Clothes</a>
              <a href="#">Mens Goggles</a>
              <a href="#">Mens Lens</a>
              <a href="#">Mens Spectatles</a>
              <a href="#">Mens Shoes</a>
              <a href="#">Mens Watches</a>
              <a href="#">Mens Trousers</a>
              <a href="#">Mens Jeans</a>
              <a href="#">Mens Shirts</a>
            </div>
          </div>
      <div style={{ display: "flex" }}>
      
        <br />
        <div className="filters_btn">
         




          <button className="button-62" onClick={() => { handleSort('asc', 'price') }} >Low to High Price</button><br />
          <button className="button-62" onClick={() => { handleSort('dsc', 'price') }} >High to Low Price</button><br />
          <button className="button-62" onClick={() => { handleSort('asc', 'name') }} >Sort By Name A-Z</button><br />
          <button className="button-62" onClick={() => { handleSort('dsc', 'name') }} >Sort By Name Z-A</button>

        </div>
        <br />
        <br /><br />
        <hr />

        {/* <AddCity handleaddcity={handleaddcity} /> */}


        <div className="productgrid">
          {todo.map((item) => (
            <Cityitem
              key={item.id}
              {...item}
             
             
            />
           
          ))}
          
        </div>
      </div>
      <div style={{ marginTop: "50px", width: "100%", textAlign: "center" }}>
        <button style={{ marginRight: "10px", textAlign: "center", width: "150px", height: "30px", color: "white", fontFamily: "sans-serif", backgroundColor: "black", fontWeight: "600" }} disabled={page <= 1} onClick={() => handlepage(-1)}>
          Previous Page
        </button>
        <button style={{ marginRight: "10px", color: "white", backgroundColor: "black", textAlign: "center", height: "30px", fontWeight: "600", borderRadius: "10px" }}>{page}</button>
        <button style={{ marginRight: "10px", color: "white", backgroundColor: "black", textAlign: "center", height: "30px", fontWeight: "600", borderRadius: "10px" }}>{page + 1}</button>
        <button style={{ marginRight: "10px", textAlign: "center", width: "150px", height: "30px", color: "white", fontFamily: "sans-serif", backgroundColor: "black", fontWeight: "600"}} disabled={page === total} onClick={() => handlepage(1)}>
          Next Page
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      
      <Footer/>
    </div>
  );
}

export default Cities;
