import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryNavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <ul className="navbar-nav ml-auto mx-auto">
                    <li className="nav-item ml-5 mr-5">
                        <NavLink className="nav-link" to={"/new"}>New</NavLink>
                    </li>
                    <li className="nav-item ml-5 mr-5">
                        <NavLink className="nav-link" to={"/face"}>Face</NavLink>
                    </li>
                    <li className="nav-item ml-5 mr-5">
                        <NavLink className="nav-link" to={"/hand"}>Hand</NavLink>
                    </li>
                    <li className="nav-item ml-5 mr-5">
                        <NavLink className="nav-link" to={"/body"}>Body</NavLink>
                    </li>
                    <li className="nav-item ml-5 mr-5">
                        <NavLink className="nav-link" to={"/hair"}>Hair</NavLink>
                    </li>
                    <li className="nav-item ml-5 mr-5">
                        <NavLink className="nav-link" to={"/lips"}>Lips</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default CategoryNavBar;