import React, { useContext } from "react";
import PeopleCard from "../component/PeopleCard.jsx";
import StarWarsVehicles from "./StarWarsVehicles.jsx";
import StarWarsPlanets from "./StarWarsPlanets.jsx";
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
