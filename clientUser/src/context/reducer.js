export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      localStorage.setItem(
        "cartItem",
        JSON.stringify([...state.cart, action.payload])
      );
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      localStorage.setItem(
        "cartItem",
        JSON.stringify([
          ...state.cart.filter((prod) => prod._id !== action.payload),
        ])
      );

      return {
        ...state,
        cart: [...state.cart.filter((prod) => prod._id !== action.payload)],
      };
  }
};
