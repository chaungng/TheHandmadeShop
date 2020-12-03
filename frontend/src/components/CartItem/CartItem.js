import React, { useState } from 'react';
import { connect } from 'react-redux';
import './CartItem.scss'
import { addProductToCart, decrementCartQuantity, incrementCartQuantity, removeProductFromCart } from "../../actions";

const CartItem = ({ id, name, price, description, quantity, img, dispatch }) => {
    console.log(id);
    console.log(name);

    const [itemQuantity, setItemQuantity] = useState(quantity);

    const removeItem = () => {
        dispatch(removeProductFromCart(id));
    }

    const handleIncrement = (e) => {
        setItemQuantity(itemQuantity + 1);
        dispatch(incrementCartQuantity(id));
    }

    const handleDecrement = (e) => {
        let value = itemQuantity;

        if (value > 1) {
            setItemQuantity(itemQuantity - 1);
            dispatch(decrementCartQuantity(id));
        }
    }

    const handleQuantityChange = (e) => {
        const value = e.target.value;

        if (value > 1) {
            setItemQuantity(value);
            dispatch(addProductToCart(id));
        }
    };

    return (
        <div className="row align-items-center mb-3">
            <div className="col-12 col-sm-12 col-md-2 text-center">
                <img className="img-responsive" src={img} style={{ height: '60%', width: '60%' }} alt={description} />
            </div>
            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                <h5 className="product-name">{name}</h5>
                <p><small className="product-description">{description}</small></p>
            </div>
            <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row product-quantity-container align-items-center">
                <div className="col-6 col-sm-6 col-md-6 text-md-right" style={{ paddingTop: '5px' }}>
                    <h6><strong>{price}<span className="text-muted"> x</span></strong></h6>
                </div>
                <div className="col-4 col-sm-4 col-md-4">
                    <div className="quantity">
                        <input className="plus" type="button" value="+"
                            onClick={(e) => { handleIncrement(e) }} />
                        <input className="qty" type="number" step="1" min="1" value={itemQuantity} title="Qty" size="4"
                            onChange={handleQuantityChange} />
                        <input className="minus" type="button" value="-"
                            onClick={(e) => { handleDecrement(e) }} />
                    </div>
                </div>
                <div className="col-2 col-sm-2 col-md-2 text-right">
                    <button type="button" className="btn btn-outline-danger btn-xs"
                        onClick={removeItem}>
                        <i className="fa fa-trash" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default connect()(CartItem);