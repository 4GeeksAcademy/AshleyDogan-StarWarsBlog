import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetsCard = ({ name, uid, diameter, terrain, climate }) => {
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
              <h6>Climate:</h6>
              {climate}
            </li>
            <li className="list-group-item">
              <h6>Terrain:</h6>
              {terrain}
            </li>
            <li className="list-group-item">
              <h6>Diameter:</h6>
              {diameter}
            </li>
          </ul>
          <Link to={`/planets/${uid}`}>
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
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default PlanetsCard;
