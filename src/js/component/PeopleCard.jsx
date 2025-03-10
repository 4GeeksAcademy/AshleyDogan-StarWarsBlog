import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const PeopleCard = ({ name, uid, gender, hair_color, eye_color }) => {
  const { store, actions } = useContext(Context);
  console.log({ name, gender, eye_color, hair_color});
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} 
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h6>Gender:</h6>
              {gender}
            </li>
            <li className="list-group-item">
              <h6>Eye-color:</h6>
              {eye_color}
            </li>
            <li className="list-group-item">
              <h6>Hair-color:</h6>
              {hair_color}
            </li>
          </ul>
          <Link to={`/people/${uid}`}>
            <button href="#" className="btn btn-outline-primary">
              Learn more
            </button>
          </Link>
          <a href="#" className="btn btn-outline-warning">
            <i class="fa-regular fa-heart"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default PeopleCard;
