import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

import MyCard from "../component/MyCard.jsx";

const StarWarsPlanets = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <>
            {store.planets.map(planet => {
                return (
                    <MyCard key={planet.uid} name={planet.name} />
                )
                })
            }
        </>
    );
}

export default StarWarsPlanets;