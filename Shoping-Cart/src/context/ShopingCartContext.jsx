// we wanna export two functions
// 1 => is for getting our context
import React, { createContext, useState } from "react";
import { PRODUCTS } from "../data/items";
// we are just creating this kind of store  in our application wehere its gonna keep track of states and functions  that needs to be accsessed everywhere in our project cause i wanna have acsess to and change in the shop and cart
export const ShopingContext = createContext(null);

// we wanna create a unction that loops through the items.json array and create an empty object to represent  our intail state of our court items
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

function ShopingCartUse(props) {
  // we are creating the states we are gonna have in our applications
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // we are creating a whole component for this cause we wanna keep track of all of the data and organize it inside of this single comonent
  // so it will define all of the states for our application  inside of here and the functions too than just pass it to the provider and we are going to render it by graping a props named children
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const increaseCartItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const decreaseCartItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] = 0) }));
  };

  // now we need to pass them to our provider so we have acsess to it outside of this component
  const contextValue = {
    cartItems,
    increaseCartItem,
    decreaseCartItem,
    removeFromCart,
    getTotalAmount,
  };

  return (
    <ShopingContext.Provider value={contextValue}>
      {props.children}
    </ShopingContext.Provider>
  );
}

export default ShopingCartUse;
// 2 => is for implementing the provider portion of this so this provider is going to give me all the values i need adn its gonna do all the rendering code for our shoping cart and when we click on the close button

// NOTE : ANYTIME YOU USE A PROVIDER THE PROVIDER NEEDSTO HAVE CHILDREN  AND OBJECTS INSIDE OF IT

// serach about self-encolsed functions this will wrap around other components in our applications
