import axios from "axios";

const getData = (params = {}) => {
  return axios.get(`http://localhost:3000/products`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      _sort: params.sort,
      _order: params.order
    }
  });
};

export const addcity = (data = { title: "", image: "", brand: "",description:"",price:"" }) => {
  return axios({
    method: "post",
    url: "http://localhost:3000/products",
    data: data
  });
};

// export const deletecity = (id) => {
//   return axios({
//     method: "delete",
//     url: `http://localhost:3000/products/${id}`
//   });
// };

export default getData;
