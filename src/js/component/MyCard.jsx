import React from "react";
import "../../styles/home.css"

const MyCard = ({ name }) => {

    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://placehold.co/400x200" className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p></p>
                    <a href="#" className="btn btn-outline-primary">Learn more</a>
                    <a href="#" className="btn btn-outline-warning"><i class="fa-regular fa-heart"></i></a>
                </div>
            </div>
        </>
    );
}

export default MyCard;