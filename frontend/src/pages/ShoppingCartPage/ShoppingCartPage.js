import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addNewOrder } from '../../reducers/shopReducer';
import CartItem from "../../components/CartItem/CartItem";
import { refreshCart } from '../../actions';

const ShoppingCart = (props) => {
    console.log("Shopping Cart props " + props)

    // Dispatch Hook
    const dispatch = useDispatch()

    // Order button handler
    const onOrder = () => {
        const { cartItems, cartItemCount, totalPrice } = props

        if (cartItemCount === 0) {
            return alert("Please select item before order")
        }

        let cart = {
            cartItems: cartItems,
            cartItemCount: cartItemCount,
            totalPrice: totalPrice
        }

        // Save the order to MongoDB
        dispatch(addNewOrder(cart))
        dispatch(refreshCart())
    };

    return (
        <div className="container" style={{ paddingTop: '6rem' }}>
            <div className="card shopping-cart">
                <div className="card-header bg-dark text-light">
                    <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                            Shopping cart
                            <div className="clearfix"></div>
                </div>
                <div className="card-body">
                    {props.cartItemCount ? props.cartItems.map(cart => (
                        <CartItem {...cart} img={cart.images[0]} />
                    )) : <h1 className="display-4 mt-5 text-center">There is no product in your cart</h1>}
                </div>
                <div className="card-footer">
                    <div className="pull-right" style={{ margin: '10px' }}>
                        <div className="pull-right" style={{ margin: '5px' }}>
                            Total price: <b>${props.totalPrice.toFixed(2)}</b>
                        </div>

                        <div className="pull-left" style={{ margin: '5px' }}>
                            Number of items: <b>{props.cartItemCount}</b>
                        </div>
                    </div>
                </div>
                <button className="btn btn-lg btn-outline-primary text-uppercase" onClick={onOrder}>Order
                    </button>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    // console.log(state, 'ShoppingCartPage: state has changed');

    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            let total = count + (curItem.price * curItem.quantity)
            total = +total.toFixed(2)
            return total;
        }, 0)
    }
}

export default connect(mapStateToProps, null)(ShoppingCart);
