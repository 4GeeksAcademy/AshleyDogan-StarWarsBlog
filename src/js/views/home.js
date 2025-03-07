import React, { useContext } from "react";
import PeopleCard from "../component/PeopleCard.jsx";
import PlanetsCard from "../component/PlanetsCard.jsx";
import VehiclesCard from "../component/VehiclesCard.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="peopleContainer">
        <h1>Characters</h1>
        <div className="peopleCards">
          {store.people.map((person) => {
            return (
              <PeopleCard
                key={person.uid}
                uid={person.uid}
                name={person.name}
                url={person.url}
                gender={person.gender}
                hair_color={person.hair_color}
                eye_color={person.eye_color}
              />
            );
          })}
        </div>
      </div>
      <div className="planetsContainer">
        <h1>Planets</h1>
        <div className="planetsCards">
          {store.planets.map((planet) => {
            return (
              <PlanetsCard
                key={planet.uid}
                uid={planet.uid}
                name={planet.name}
                url={planet.url}
              />
            );
          })}
        </div>
      </div>
      <div className="vehiclesContainer">
        <h1>Vehicles</h1>
        <div className="vehiclesCards">
          {store.vehicles.map((vehicle) => {
            return (
              <VehiclesCard
                key={vehicle.uid}
                uid={vehicle.uid}
                name={vehicle.name}
                url={vehicle.url}
              />
            );
          })}
        </div>
      </div>
      {/* <div className="planetsContainer">
			<h1>Planets</h1>
			<div className="planetsCards">
				<StarWarsPlanets />
			</div>
		</div>
		<div className="vehiclesContainer">
			<h1>Vehicles</h1>
			<div className="vehiclesCards">
				<StarWarsVehicles />
			</div>
		</div> */}
    </>
  );
};
