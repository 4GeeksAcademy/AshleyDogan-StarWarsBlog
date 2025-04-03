import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const PeopleDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const { id } = useParams();
  useEffect(() => {
    actions.getPeopleDetails(params.id);
  }, []);

  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    if (!id) return;
    fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`)
      .then((response) => response.json())
      .then((data) => setImageUrl(data.image));
  }, [id]);

  const description = store.personDetails.description;
  const personalDetails = store.personDetails.properties;

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src={imageUrl}
            alt="person-pic"
            style={{
              width: "400px",
              height: "300px",
              objectFit: "cover",
              float: "right",
              marginRight: "100px",
            }}
          />
        </div>
        <div className="col-6">
          <h1>{personalDetails.name}</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <h6 className="col-2">Name</h6>
        <h6 className="col-2">Birth Year</h6>
        <h6 className="col-2">Gender</h6>
        <h6 className="col-2">Height</h6>
        <h6 className="col-2">Skin Color</h6>
        <h6 className="col-2">Eye Color</h6>
      </div>
      <div className="row">
        <div className="col-2">{personalDetails.name}</div>
        <div className="col-2">{personalDetails.birth_year}</div>
        <div className="col-2">{personalDetails.gender}</div>
        <div className="col-2">{personalDetails.height}</div>
        <div className="col-2">{personalDetails.skin_color}</div>
        <div className="col-2">{personalDetails.eye_color}</div>
      </div>
    </div>
  );
};

export default PeopleDetails;
