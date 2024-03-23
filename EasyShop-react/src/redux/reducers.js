import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    GET_PRODUCT_QUANTITY,
    REMOVE_ALL_FROM_CART
} from "./Actions/actionTypes.js";

const initialState = {
    cartItems: [],
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                // If item already exists, increase its quantity
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                // If item doesn't exist, add it to the cart with quantity 1
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems,
                        { ...action.payload, quantity: 1 },
                    ],
                };
            }
        }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item.id !== action.payload
                ),
            };
        case INCREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        case DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };
        case GET_PRODUCT_QUANTITY: {
            const { payload: productId } = action;
            const product = state.cartItems.find(
                (item) => item.id === productId
            );
            return product ? product.quantity : 0;
        }
        case REMOVE_ALL_FROM_CART:
            return {
              ...state,
              cartItems: [],
            };
        default:
            return state;
    }
};

export default shoppingCartReducer;
