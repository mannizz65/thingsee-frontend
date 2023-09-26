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

  // Make an API request to fetch the data
  useEffect(() => {
    fetch('http://localhost:4000/thingseeSensor/latestdata')
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched data in the state variable
        setSensorData(data.result);
        console.error('data:', data.result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
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
            <h5>{sensorData.humd}</h5>
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
            <Link to="/barometric">View</Link>
          </div>
          <div class="card">
            <img src={logo12} alt="Image 2"></img>
            <h3>Historical Out</h3>
            <h5>{sensorData.historicalOut}</h5>
            <Link to="/tvoclevel">View</Link>
          </div>
        </div>
        ) : (
          <p>Loading...</p>
        )}


		<div class="weather-container"> 
        <h1>Outdoor Weather</h1>
    </div>
    {sensorData ? (
        <div class="card-row">
        
           <div class="card">
          
           <h3>Air Quality</h3>
           <h5>{sensorData.airp}</h5>

           <Link to="/airquality">View</Link>
         </div>
            
          
          
          <div class="card">
           
            <h3>Temperature</h3>
            <h5>{sensorData.temp}</h5>
            <Link to="/temperature">View</Link>
          </div>
         
          <div class="card">
            
            <h3>Wind Speed</h3>
            <h5>{sensorData.humd}</h5>
            <Link to="/barometric">View</Link>
          </div>
          <div class="card">
           
            <h3>Humidity</h3>
            <h5>{sensorData.tvoc}</h5>
            <Link to="/tvoclevel">View</Link>
          </div>
        </div>
        ) : (
          <p>Loading...</p>
        )}


		
      </section>
    </>
  );
}
