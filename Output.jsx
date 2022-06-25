import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Output = () => {

  const location =  useLocation();
  const [zipcode, setZipCode] = useState([{}]);
  const apikey = 'f058c35ac23b0300860f12ef099b94f4'
  const search = location.state.detail;

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?zip=${search},IN&appid=${apikey}`;
      const response = await fetch(url);
      const resJson = await response.json();
      setZipCode(resJson.main);
    };
    fetchApi();
  }, [search]);
  
  return (
    <div className='main-div'>
   {!zipcode ? ( 
     <p>not found</p>
      ): (
        <div>
          <h1>{zipcode.temp}&deg;</h1>
          <h2>Humidity: {zipcode.humidity}%</h2>
          {/* wind speed not fetching */}
          <h2>Wind Speed {zipcode.wind.speed}</h2>
        </div>
      ) }
    </div>
    
  )
}


export default Output