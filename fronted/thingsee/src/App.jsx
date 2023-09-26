import React from "react";
import "./assets/css/output.css";
import { Router } from "@reach/router";
import Home from "./views/Home";
import About from "./views/About";
import AirQuality from "./views/AirQuality";
import Humidity from "./views/Humidity";
import Temperature from "./views/Temperature";
import TVOCLevel from "./views/TVOCLevel";
import Barometric from "./views/Barometric";
import Carbon from "./views/Carbon";
import In from "./views/In";
import TotalIn from "./views/TotalIn";
import Out from "./views/Out";
import TotalOut from "./views/TotalOut";
import HistoricalIn from "./views/HistoricalIn";
import HistoricalOut from "./views/HistoricalOut";

import Nav from "./components/Nav";

function App() {
	return (
		<>
			<Nav />
			<div className="dark:bg-gray-900 dark:text-gray-300">
				<Router>
					<Home path="/" />
					<About path="/about" />
					<AirQuality path="/airquality" />
					<Humidity path="/humidity"/>
					<Temperature path="/temperature"/>
					<TVOCLevel path="/tvoclevel"/>
					<Barometric path="/barometric"/>
					<In path="/in"/>
					<Out path="/out"/>
					<TotalIn path="/totalin"/>
					<TotalOut path="/totalout"/>
					<Carbon path="/carbon"/>
					<HistoricalIn path="/historicalIn"/>
					<HistoricalOut path="/historicalOut"/>

				</Router>
			</div>
		</>
	);
}

export default App;
