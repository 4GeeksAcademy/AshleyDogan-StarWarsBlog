import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

import MyCard from "../component/MyCard.jsx";

const StarWarsVehicles = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <>
            {store.vehicles.map(vehicle => {
                return (
                    <MyCard key={vehicle.uid} name={vehicle.name} />
                )
                })
            }
        </>
    );
}

export default StarWarsVehicles;