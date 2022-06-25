import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Temp.css";

const Temp = () => {
 
  const [search, setSearch] = useState("");
  const history = useHistory();

 
   function weather(e) {
     e.preventDefault();
    //  <Output search={search}/>
     history.push({
       pathname : '/output',
       state : {detail : [search]}
     });
    //  console.log(search);
   }

  return (
    <div className="main-div">
      <h1>Weather Forcast</h1>
      <div className="detail">
        <p>Enter a Norwegin zipcode below to get the</p>
        <p className="sec">
          &nbsp;&nbsp;&nbsp;current weather condions for that area.
        </p>
      </div>
      <div className="input-data">
        <input
          type="text"
          placeholder="Enter zipcode.."
          className="input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className="btn" onClick={weather}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default Temp;

