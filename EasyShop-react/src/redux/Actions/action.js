import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    GET_PRODUCT_QUANTITY,
    REMOVE_ALL_FROM_CART,
} from "./actionTypes";

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});

export const increaseQuantity = (productId) => ({
    type: INCREASE_QUANTITY,
    payload: productId,
});

export const decreaseQuantity = (productId) => ({
    type: DECREASE_QUANTITY,
    payload: productId,
});

export const getProductQuantity = (productId) => {
    return {
        type: GET_PRODUCT_QUANTITY,
        payload: productId,
    };
};

export const removeAllFromCart = () => {
    return {
        type: REMOVE_ALL_FROM_CART,
    };
};
