import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const PlanetDetail = (uid) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const { id } = useParams();
  useEffect(() => {
    actions.getPlanetsDetails(params.id);
  }, []);

  const description = store.planetDetails.description;
  const updatedPlanetDetails = store.planetDetails.properties;

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">photo goes here</div>
        <div className="col-6">
          <h1>{updatedPlanetDetails.name}</h1>
          <p>description</p>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <h6 className="col-2">Name</h6>
        <h6 className="col-2">Climate</h6>
        <h6 className="col-2">Diameter</h6>
        <h6 className="col-2">Rotation Period</h6>
        <h6 className="col-2">Orbital Period</h6>
        <h6 className="col-2">Terrain</h6>
      </div>
      <div className="row">
        <div className="col-2">{updatedPlanetDetails.name}</div>
        <div className="col-2">{updatedPlanetDetails.climate}</div>
        <div className="col-2">{updatedPlanetDetails.diameter}</div>
        <div className="col-2">{updatedPlanetDetails.rotation_period}</div>
        <div className="col-2">{updatedPlanetDetails.orbital_period}</div>
        <div className="col-2">{updatedPlanetDetails.terrain}</div>
      </div>
    </div>
  );
};

export default PlanetDetail;
