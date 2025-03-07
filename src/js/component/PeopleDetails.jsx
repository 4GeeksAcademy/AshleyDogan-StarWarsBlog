import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const PeopleDetails = (uid) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const {id} = useParams();
  useEffect(() => {actions.getPeopleDetails(params.id)}, [])
  
  const description = store.personDetails.description;
  const personalDetails = store.personDetails.properties;

  return (
    <div>{personalDetails.name}</div>
  )}

  export default PeopleDetails;