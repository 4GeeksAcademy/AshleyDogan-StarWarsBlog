import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

import MyCard from "../component/MyCard.jsx";

const StarWarsStarships = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <>
            {store.starships.map(starship => {
                return (
                    <MyCard key={starship.uid} uid={starship.uid} name={starship.name} url={starship.url}/>
                )
                })
            }
        </>
    );
}

export default StarWarsStarships;


