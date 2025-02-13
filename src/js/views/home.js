import React from "react";
import StarWarsPeople from "./StarWarsPeople.jsx";
import StarWarsVehicles from "./StarWarsVehicles.jsx";
import StarWarsPlanets from "./StarWarsPlanets.jsx";
import "../../styles/home.css";

export const Home = () => (
	<>
		<div className="peopleContainer">
			<h1>Characters</h1>
			<div className="peopleCards">
				<StarWarsPeople />
			</div>
		</div>

		<div className="vehiclesContainer">
			<h1>Vehicles</h1>
			<div className="vehiclesCards">
				<StarWarsVehicles />
			</div>
		</div>
		<div className="planetsContainer">
			<h1>Planets</h1>
			<div className="planetsCards">
				<StarWarsPlanets />
			</div>
		</div>
	</>
);
