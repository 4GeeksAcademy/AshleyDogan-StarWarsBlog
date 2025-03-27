import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const VehiclesCard = ({ name, uid, model, passengers, crew }) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://placehold.co/400x200"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h6>Model:</h6>
              {model}
            </li>
            <li className="list-group-item">
              <h6>Passengers:</h6>
              {passengers}
            </li>
            <li className="list-group-item">
              <h6>Crew:</h6>
              {crew}
            </li>
          </ul>
          <Link to={`vehicles/${uid}`}>
            <button href="#" className="btn btn-outline-primary">
              Learn more
            </button>
          </Link> 
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              actions.addFavorite(name);
            }}
          >
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default VehiclesCard;
