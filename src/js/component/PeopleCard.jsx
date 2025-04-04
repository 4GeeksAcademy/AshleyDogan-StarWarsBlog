import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const PeopleCard = ({ name, uid, gender, hair_color, eye_color }) => {
  const { store, actions } = useContext(Context);
  const [characterData, setCharacterData] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch(`https://akabab.github.io/starwars-api/api/id/${uid}.json`)
      .then((response) => response.json())
      .then((data) => setImageUrl(data.image));
  }, [uid]);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt=""
          style={{ width: "auto", height: "200px", objectFit: "cover" }}
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
            <button className="btn btn-outline-primary">Learn more</button>
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

export default PeopleCard;
