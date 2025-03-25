import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const PeopleDetails = (uid) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const { id } = useParams();
  useEffect(() => {
    actions.getPeopleDetails(params.id);
  }, []);

  const description = store.personDetails.description;
  const personalDetails = store.personDetails.properties;

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">photo goes here</div>
        <div className="col-6">
          <h1>{personalDetails.name}</h1>
          <p>description</p>
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
