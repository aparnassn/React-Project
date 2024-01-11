export const initialState = {
  total: 0,
  products: [],
};

const ShopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);
      return {
        ...state,
        products: payload.products,
      };
    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);
      return {
        ...state,
        products : payload.products,
      }

    case "UPDATED_PRICE":
        console.log("UPDATED_PRICE",payload);
        return{
            ...state,
            total:payload.total
        }
    default :
        throw new Error(`No case for type ${type} found in ShopReducer`)
  }
};

export default ShopReducer;
