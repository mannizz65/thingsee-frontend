import React, { useState, useEffect } from 'react';
import { Link } from "@reach/router";
import logo1 from "../../src/assets/wind.png";
import logo2 from "../../src/assets/co2.png";
import logo3 from "../../src/assets/cold.png";
import logo4 from "../../src/assets/humidity.png";
import logo5 from "../../src/assets/pressure.png";
import logo6 from "../../src/assets/tvoc.png";
import logo7 from "../../src/assets/log-in.png";
import logo8 from "../../src/assets/log-out.png";
import logo9 from "../../src/assets/all.png";
import logo10 from "../../src/assets/sum.png";
import logo11 from "../../src/assets/l.png";
import logo12 from "../../src/assets/ho.png";


export default function componentName() {
  const [sensorData, setSensorData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [time, setTime] = useState(new Date());



  // Make an API request to fetch the data
  useEffect(() => {
    fetch('http://13.233.201.118:4000/thingseeSensor/latestdata')
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched data in the state variable
        setSensorData(data.result);
        console.error('data:', data.result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

      

 // Fetch weather data
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=65.0124&lon=25.4682&appid=174edfc6e5ad092f016282b294e8dfea')
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched weather data in the state variable
        setWeatherData(data);
        console.error('Weather data:', data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });



      const intervalID = setInterval(() => {
        // Update the time every second
        setTime(new Date());
      }, 1000);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(intervalID);





  }, []);  // Empty dependency array means this effect runs once when the component mounts


  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <>
      <section className="text-gray-700 body-font">
      {sensorData ? (
        <div class="card-row">
        
           <div class="card">
           <img src={logo1} alt="Image 1"></img>
           <h3>Air Quality</h3>
           <h5>{sensorData.airp}</h5>

           <Link to="/airquality">View</Link>
         </div>
            
          
          <div class="card">
            <img src={logo2} alt="Image 2"></img>
            <h3>Carbon Dioxide</h3>
            <h5>{sensorData.carbonDioxide}</h5>

            <Link to="/carbon">View</Link>
          </div>
          <div class="card">
            <img src={logo3} alt="Image 2"></img>
            <h3>Temperature</h3>
            <h5>{sensorData.temp}</h5>
            <Link to="/temperature">View</Link>
          </div>
          <div class="card">
            <img src={logo4} alt="Image 2"></img>
            <h3>Humidity</h3>
            <h5>{sensorData.humd}</h5>
            <Link to="/humidity">View</Link>
          </div>
          <div class="card">
            <img src={logo5} alt="Image 2"></img>
            <h3>Barometric Pressure</h3>
            <h5>00</h5>
            <Link to="/barometric">View</Link>
          </div>
          <div class="card">
            <img src={logo6} alt="Image 2"></img>
            <h3>TVOC Level</h3>
            <h5>{sensorData.tvoc}</h5>
            <Link to="/tvoclevel">View</Link>
          </div>
        </div>
        ) : (
          <p>Loading...</p>
        )}



{sensorData ? (
        <div class="card-row">
          <div class="card">
            <img src={logo7} alt="Image 1"></img>
            <h3>In</h3>
            <h5>{sensorData.in}</h5>

            <Link to="/in">View</Link>
          </div>
          <div class="card">
            <img src={logo8} alt="Image 2"></img>
            <h3>Out</h3>
            <h5>{sensorData.out}</h5>

            <Link to="/out">View</Link>
          </div>
          <div class="card">
            <img src={logo9} alt="Image 2"></img>
            <h3>Total In</h3>
            <h5>{sensorData.totalIn}</h5>
            <Link to="/totalin">View</Link>
          </div>
          <div class="card">
            <img src={logo10} alt="Image 2"></img>
            <h3>Total Out</h3>
            <h5>{sensorData.totalOut}</h5>
            <Link to="/totalout">View</Link>
          </div>
          <div class="card">
            <img src={logo11} alt="Image 2"></img>
            <h3>Historical In</h3>
            <h5>{sensorData.historicalIn}</h5>
            <Link to="/historicalIn">View</Link>
          </div>
          <div class="card">
            <img src={logo12} alt="Image 2"></img>
            <h3>Historical Out</h3>
            <h5>{sensorData.historicalOut}</h5>
            <Link to="/historicalOut">View</Link>
          </div>
        </div>
        ) : (
          <p>Loading...</p>
        )}


		<div class="weather-container"> 
        <h1>Outdoor Weather</h1>
    </div>
    {weatherData ? (
        <div class="card-row">
        
           <div class="card">
          
           <h3>Feels Like</h3>
           <h5>{weatherData.main.feels_like}</h5>

          
         </div>
            
          
          
          <div class="card">
           
            <h3>Temperature</h3>
            <h5>{weatherData.main.temp}</h5>
            
          </div>
         
          <div class="card">
            
            <h3>Wind Speed</h3>
            <h5>{weatherData.wind.speed}</h5>
          
          </div>
          <div class="card">
           
            <h3>Humidity</h3>
            <h5>{weatherData.main.humidity}</h5>
           
          </div>
          <div class="card">
           
           <h3>Weather</h3>
           <h5>{weatherData.weather[0].description}</h5>
          
         </div>
        </div>
        ) : (
          <p>Loading...</p>
        )}


<div className="clock-container">
      <div className="clock-card">
        <h1>Current Time:</h1>
        <p className="clock-time">
          {String(hours).padStart(2, '0')}:
          {String(minutes).padStart(2, '0')}:
          {String(seconds).padStart(2, '0')}
        </p>
      </div>
    </div>


		
      </section>
    </>
  );
}
