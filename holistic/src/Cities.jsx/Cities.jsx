import { useEffect, useState } from "react";
import getData, { addcity, deletecity } from "./api";
import Cityitem from "./Cityitem";
// import addcity from "./api";
import AddCity from "./AddCity";
import "./Cities.css";

function Cities() {
  const [loading, setloading] = useState(false);
  const [total, settotal] = useState(1);
  const [todo, settodo] = useState([]);
  const [page, setpage] = useState(1);

  const [error, seterror] = useState(false);

  const ascending = "population";
  const order = "asc";
  const fetchup = (page) => {
    setloading(true);
    getData({ page: page, limit: 6, sort: ascending, order: order })
      .then((res) => {
        settotal(res.headers["x-total-count"]);
        settodo(res.data);
        // settotal(res.headers["x-total-count"])
      })
      .catch((err) => seterror(err))
      .finally(() => setloading(false));
  };

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
    <div>
      {/* <AddCity handleaddcity={handleaddcity} /> */}

      
       <div className="productgrid">
        {todo.map((item) => (
          <Cityitem
            key={item.id}
            {...item}
          
          />
        ))}
      </div>
      <div style={{marginTop:"50px",width:"100%",textAlign:"center"}}>
      <button style={{marginRight:"40px",textAlign:"center",width:"150px",height:"30px",color:"black",fontFamily:"sans-serif",backgroundColor:"aqua",fontWeight:"600",borderRadius:"10px"}} disabled={page <= 1} onClick={() => handlepage(-1)}>
        Previous Page
      </button>
      <button style={{marginRight:"40px",color:"white",backgroundColor:"black",textAlign:"center",height:"30px",fontWeight:"600",borderRadius:"10px"}}>{page}</button>
      <button style={{marginRight:"40px",color:"white",backgroundColor:"black",textAlign:"center",height:"30px",fontWeight:"600",borderRadius:"10px"}}>{page+1}</button>
      <button style={{marginRight:"40px",textAlign:"center",width:"150px",height:"30px",color:"black",fontFamily:"sans-serif",backgroundColor:"aqua",fontWeight:"600",borderRadius:"10px"}} disabled={page === total} onClick={() => handlepage(1)}>
        Next Page
      </button>
      </div>
     
    </div>
  );
}

export default Cities;
