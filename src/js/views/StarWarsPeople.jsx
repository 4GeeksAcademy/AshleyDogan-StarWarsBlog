import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

import MyCard from "../component/MyCard.jsx";

const StarWarsPeople = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <>
            {store.people.map(person => {
                return (
                    <MyCard key={person.uid} uid={person.uid} name={person.name} url={person.url} />
                )
                })
            }
        </>
    );
}

export default StarWarsPeople;