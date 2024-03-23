// import { createContext, useState, useEffect } from "react";

// export const ShoppingCartContext = createContext({});

// const ShoppingCartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         // Load cart items from session storage when component mounts
//         const savedCartItems = sessionStorage.getItem("cartItems");
//         if (savedCartItems) {
//             setCartItems(JSON.parse(savedCartItems));
//         }
//     }, []);

//     useEffect(() => {
//         // Save cart items to session storage whenever cartItems change
//         sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }, [cartItems]);

//     const getProductsQuantity = (id) => {
//         return cartItems.find((item) => item.id === id)?.quantity || 0;
//     };

//     const increaseCartQuantity = (id) => {
//         setCartItems((currentProds) => {
//             if (currentProds.find((prod) => prod.id === id) == null) {
//                 return [...currentProds, { id, quantity: 1 }]; // Fixed quantity1 to quantity
//             } else {
//                 return currentProds.map((prod) => {
//                     if (prod.id === id) {
//                         return { ...prod, quantity: prod.quantity + 1 };
//                     } else {
//                         return prod;
//                     }
//                 });
//             }
//         });
//     };

//     const decreaseCartQuantity = (id) => {
//         setCartItems((currentProds) => {
//             if (currentProds.find((prod) => prod.id === id) == null) {
//                 return currentProds.filter((prod) => prod.id !== id);
//             } else {
//                 return currentProds.map((prod) => {
//                     if (prod.id === id) {
//                         return { ...prod, quantity: prod.quantity - 1 };
//                     } else {
//                         return prod;
//                     }
//                 });
//             }
//         });
//     };

//     const removeItemFromCart = (id) => {
//         setCartItems((currentProds) => {
//             // Corrected the missing return statement
//             return currentProds.filter((prod) => prod.id !== id);
//         });
//     };

//     return (
//         <ShoppingCartContext.Provider
//             value={{
//                 cartItems,
//                 getProductsQuantity,
//                 increaseCartQuantity,
//                 decreaseCartQuantity,
//                 removeItemFromCart,
//             }}
//         >
//             {children}
//         </ShoppingCartContext.Provider>
//     );
// };

// export default ShoppingCartProvider;
