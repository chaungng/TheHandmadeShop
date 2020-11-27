import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const MainNavBar = ({ cartLength }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top-sm justify-content-start flex-nowrap">
            <div className="container">
                <NavLink className="navbar-brand" to="/">The Handmade Shop</NavLink>
                {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn my-2 my-sm-0 btn-primary" type="submit"><i className="fa fa-search"
                    aria-hidden="true" /></button> */}
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item float-right">
                            <NavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart"
                                aria-hidden="true" />Cart {cartLength ? `(${cartLength})` : ''}</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    console.log("Cart length: " + state.shop.cart.length)

    return {
        cartLength: state.shop.cart.length
    }
};

export default connect(mapStateToProps, null)(MainNavBar);