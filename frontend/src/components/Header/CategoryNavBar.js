import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryNavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <ul className="navbar-nav ml-auto mx-auto">
                    <li className="nav-item ml-5 mr-5">
                        <NavLink className="nav-link" to={"/products/face"}>Face</NavLink>
                    </li>
                    <li className="nav-item ml-5 mr-5">
                        <NavLink className="nav-link" to={"/products/hands"}>Hands</NavLink>
                    </li>
                    <li className="nav-item ml-5 mr-5">
                        <NavLink className="nav-link" to={"/products/body"}>Body</NavLink>
                    </li>
                    <li className="nav-item ml-5 mr-5">
                        <NavLink className="nav-link" to={"/products/hair"}>Hair</NavLink>
                    </li>
                    <li className="nav-item ml-5 mr-5">
                        <NavLink className="nav-link" to={"/products/lips"}>Lips</NavLink>
                    </li>
                    <li className="nav-item ml-5 mr-5">
                        <NavLink className="nav-link" to={"/products/all"}>All</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default CategoryNavBar;