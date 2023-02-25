import { useState } from "react";
// import {handleaddcity} from "./Cities"

function AddCity({ handleaddcity }) {
  const [formstate, setformstate] = useState({
    name: "",
    population: "",
    country: ""
  });

  const handlechnge = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? Number(value) : value;

    setformstate({ ...formstate, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    handleaddcity(formstate);
  };

  const { name, population, country } = formstate;
  return (
    <>
      <h3>Form To Add New City</h3>
      <form onSubmit={handlesubmit}>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handlechnge}
          placeholder="Add name"
        />
        <br />
        <input
          name="population"
          type="number"
          value={population}
          onChange={handlechnge}
          placeholder="Add Population"
        />
        <br />
        <input
          name="country"
          type="text"
          value={country}
          onChange={handlechnge}
          placeholder="Add country name"
        />
        <br />
        <input type="submit" onSubmit={handlesubmit} />
      </form>
    </>
  );
}

export default AddCity;
