import React from 'react';
import './Api.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Api = () => {
    const apiKey="f56f24967aaf51182d1d4df628297c6d";
    const [inputCity,setInputCity]=useState("");
    const [data,setData]=useState({})
    const getWeatherDetails=(cityName)=>{
        if(!cityName)return
        const apiURL="https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
        axios.get(apiURL).then((res)=>{
            console.log("response",res.data)

            setData(res.data)
        }).catch((err)=>{
            console.log("err",err)
        })
       
    }
    const handleChangeInput =(e)=>{
      console.log("value",e.target.value)
      setInputCity(e.target.value)
    }

    const handleSearch =()=>{
      getWeatherDetails(inputCity);
    }

    useEffect(()=>{
        getWeatherDetails("delhi")
    },[])
  return (
    <div className="col-md-12 weatherBg">
      <h1>Weather</h1>
      <input type="text" className="form-control" 
       value={inputCity}
       onChange={handleChangeInput}/>
     
      <button className="btn btn-primary" type="button"
      onClick={handleSearch}>
        Search
      </button>
      <div className="col-md-12 text-centre mt-5">
        <div className="shadow rounded weatherResultBox">
            <img className="weatherIcon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAYt3pqFyGhCtluT0hqHYV2eBePQodfN2EjQBKgM7_Q&s"/>
            <h5 className="weatherCity">{
                data?.name}</h5>
        <h6 className="weathertemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
        </div>
      </div>
    

    </div>
    
  );
};

export default Api;




