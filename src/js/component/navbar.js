import React from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starwars-logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			
			<span className="navbar-brand"><img className="logo" src={starWarsLogo} alt="starWarsLogo" /></span>
		
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
			</div>
		</nav>
	);
};
