import axios from 'axios';
import { fetchProductsFromMongo, addOrderToMongo, refreshCart } from '../actions/index'

import {
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART_ITEM_QUANTITY,
    INCREMENT_CART_ITEM_QUANTITY,
    REMOVE_PRODUCT_FROM_CART,
    FETCH_PRODUCTS_FROM_MONGO,
    ADD_ORDER_TO_MONGO,
    REFRESH_CART
} from '../actions';

const initialState = {
    products: [],
    cart: [],
    orders: []
};

const shopReducer = (state = initialState, action) => {
    let updatedCart;
    let updatedItemIndex;
    let updatedOrders;

    switch (action.type) {
        case INCREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const incrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            incrementedItem.quantity++;

            updatedCart[updatedItemIndex] = incrementedItem;

            return { ...state, cart: updatedCart };

        case DECREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            console.log("Cart before decrement " + updatedCart);

            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const decrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            decrementedItem.quantity--;

            updatedCart[updatedItemIndex] = decrementedItem;

            return { ...state, cart: updatedCart };

        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);

            if (updatedItemIndex < 0) {
                updatedCart.push({ ...action.payload.product, quantity: action.payload.quantity });

            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };

                updatedItem.quantity += action.payload.quantity;

                console.log("Update item quantity " + updatedItem.quantity)
                console.log("Update item " + updatedItem)
                console.log("Index " + updatedItemIndex)

                updatedCart[updatedItemIndex] = updatedItem;
            }

            return { ...state, cart: updatedCart };

        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            updatedCart.splice(updatedItemIndex, 1);

            return { ...state, cart: updatedCart };

        case REFRESH_CART:
            updatedCart = [];
            return { ...state, cart: updatedCart };

        case FETCH_PRODUCTS_FROM_MONGO:
            return { ...state, products: action.payload };

        case ADD_ORDER_TO_MONGO:
            updatedOrders = [...state.orders];
            updatedOrders.push({ order: action.payload });

            console.log("Updated Orders " + updatedOrders);

            return { ...state, orders: updatedOrders };

        default:
            return state;

    }
};

export default shopReducer;


// Fetch products from MongoDB
export async function fetchProducts(dispatch, getState) {
    const response = await axios.get('http://localhost:5000/api/products')
    // console.log(response.data)
    dispatch(fetchProductsFromMongo(response.data))
}


// Write a synchronous outer function that receives the `cart` parameter:
export function addNewOrder(cart) {
    // And then creates and returns the async thunk function:
    return async function saveNewOrderThunk(dispatch, getState) {
        // Now we can use the cart value and send it to the server
        const initialOrder = { cart }
        const response = await axios.post('http://localhost:5000/api/neworder', initialOrder)
        dispatch(addOrderToMongo(response.data))
    }
}


