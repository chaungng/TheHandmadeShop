
// /**
//  * Fetch MongoDB Actions
//  */
export const FETCH_PRODUCTS_FROM_MONGO = 'FETCH_PRODUCTS_FROM_MONGO';
export const ADD_ORDER_TO_MONGO = 'ADD_ORDER_TO_MONGO';

export const fetchProductsFromMongo = products => {
    return {
        type: FETCH_PRODUCTS_FROM_MONGO,
        payload: products
    }
};

export const addOrderToMongo = order => {
    return {
        type: ADD_ORDER_TO_MONGO,
        payload: order
    }
};


/**
 * Product and Cart Item Actions
 */
export const REFRESH_CART = 'REFRESH_CART';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY';
export const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY';


export const refreshCart = () => {
    return {
        type: REFRESH_CART
    }
};

export const addProductToCart = product => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
};

export const removeProductFromCart = productId => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId
    }
};

export const incrementCartQuantity = productId => {
    return {
        type: INCREMENT_CART_ITEM_QUANTITY,
        payload: productId
    }
};

export const decrementCartQuantity = productId => {
    return {
        type: DECREMENT_CART_ITEM_QUANTITY,
        payload: productId
    }
};


/**
 * Category Actions
 */
export const CHOOSE_CATEGORY_TO_FILTER = 'CHOOSE_CATEGORY_TO_FILTER';

export const chooseCategoryToFilter = category => {
    return {
        type: CHOOSE_CATEGORY_TO_FILTER,
        category
    }
};


/**
 * Page Actions
 */
export const PREV_PAGE = 'PREV_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const GO_PAGE = 'GO_PAGE';
export const COUNT_ITEM = 'COUNT_ITEM';


export const nextPage = () => {
    return {
        type: NEXT_PAGE
    }
};

export const prevPage = () => {
    return {
        type: PREV_PAGE
    }
};

export const goPage = (n) => {
    return {
        type: GO_PAGE,
        currentPage: n
    }
};

export const countItem = (n) => {
    return {
        type: COUNT_ITEM,
        totalItemsCount: n
    }
}