import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const VehicleDetail = (uid) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const { id } = useParams();
  useEffect(() => {
    actions.getVehicleDetails(params.id);
  }, []);

  const description = store.vehicleDetails.description;
  const updatedVehicleDetails = store.vehicleDetails.properties;

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">photo goes here</div>
        <div className="col-6">
          <h1>{updatedVehicleDetails.name}</h1>
          <p>description</p>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <h6 className="col-2">Name</h6>
        <h6 className="col-2">Cargo Capacity</h6>
        <h6 className="col-2">Passengers</h6>
        <h6 className="col-2">Max Speedt</h6>
        <h6 className="col-2">Crew</h6>
        <h6 className="col-2">Model</h6>
      </div>
      <div className="row">
        <div className="col-2">{updatedVehicleDetails.name}</div>
        <div className="col-2">{updatedVehicleDetails.cargo_capacity}</div>
        <div className="col-2">{updatedVehicleDetails.passengers}</div>
        <div className="col-2">
          {updatedVehicleDetails.max_atmosphering_speed}
        </div>
        <div className="col-2">{updatedVehicleDetails.crew}</div>
        <div className="col-2">{updatedVehicleDetails.model}</div>
      </div>
    </div>
  );
};

export default VehicleDetail;
