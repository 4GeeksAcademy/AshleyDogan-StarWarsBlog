import React, {useContext} from "react";
import "../../styles/home.css";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext"

const PeopleCard = ({ name, uid }) => {

    const {store, actions} = useContext(Context)

    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://placehold.co/400x200" className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p></p>
                    <Link to={`/people/${uid}`}>
                        <button href="#" className="btn btn-outline-primary">Learn more</button>
                    </Link>
                    <a href="#" className="btn btn-outline-warning"><i class="fa-regular fa-heart"></i></a>
                </div>
            </div>
        </>
    );
}

export default PeopleCard;