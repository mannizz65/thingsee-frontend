import React from "react";
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

export default function componentName() {
  return (
    <>
      <section className="text-gray-700 body-font">
        <div class="card-row">
          <div class="card">
            <img src={logo1} alt="Image 1"></img>
            <h3>Air Quality</h3>

            <Link to="/airquality">View</Link>
          </div>
          <div class="card">
            <img src={logo2} alt="Image 2"></img>
            <h3>Carbon Dioxide</h3>

            <Link to="/carbon">View</Link>
          </div>
          <div class="card">
            <img src={logo3} alt="Image 2"></img>
            <h3>Temperature</h3>
            <Link to="/temperature">View</Link>
          </div>
          <div class="card">
            <img src={logo4} alt="Image 2"></img>
            <h3>Humidity</h3>
            <Link to="/humidity">View</Link>
          </div>
          <div class="card">
            <img src={logo5} alt="Image 2"></img>
            <h3>Barometric Pressure</h3>
            <Link to="/barometric">View</Link>
          </div>
          <div class="card">
            <img src={logo6} alt="Image 2"></img>
            <h3>TVOC Level</h3>
            <Link to="/tvoclevel">View</Link>
          </div>
        </div>



		
        <div class="card-row">
          <div class="card">
            <img src={logo7} alt="Image 1"></img>
            <h3>In</h3>

            <Link to="/in">View</Link>
          </div>
          <div class="card">
            <img src={logo8} alt="Image 2"></img>
            <h3>Out</h3>

            <Link to="/out">View</Link>
          </div>
          <div class="card">
            <img src={logo9} alt="Image 2"></img>
            <h3>Total In</h3>
            <Link to="/totalin">View</Link>
          </div>
          <div class="card">
            <img src={logo10} alt="Image 2"></img>
            <h3>Total Out</h3>
            <Link to="/totalout">View</Link>
          </div>
          <div class="card">
            <img src={logo5} alt="Image 2"></img>
            <h3>Barometric Pressure</h3>
            <Link to="/barometric">View</Link>
          </div>
          <div class="card">
            <img src={logo6} alt="Image 2"></img>
            <h3>TVOC Level</h3>
            <Link to="/tvoclevel">View</Link>
          </div>
        </div>


		<div class="weather-container"> 
        <h1>Outdoor Weather</h1>
    </div>

		
      </section>
    </>
  );
}
