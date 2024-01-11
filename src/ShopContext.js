import { createContext, useReducer, useContext } from "react";
import { initialState } from "./ShopReducer";
import ShopReducer from "./ShopReducer";


const ShopContext = createContext(initialState);


   export const ShopProvider = ({ children }) => {
        const [state, dispatch] = useReducer(ShopReducer, initialState);
        
      
        const addToCart = (product) => {
          const UpdatedCart = state.products.concat(product);
          updatePrice(UpdatedCart);
      
          dispatch({
            type: "ADD_TO_CART",
            payload: {
              products: UpdatedCart
            }
          });
        };
      
        const removeFromCart = (product) => {
          const UpdatedCart = state.products.filter(
            (currentProduct) => currentProduct.name !== product.name
          );
          updatePrice(UpdatedCart);
      
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
              products: UpdatedCart
            },
          });
        };
      
        const updatePrice = (products) => {
          let total = 0;
          products.forEach((product) => (total = total + product.price));
      
          dispatch({
            type: "UPDATED_PRICE",
            payload: {
              total,
            },
          });
        };

        const value = {
          total: state.total,
          products: state.products,
          addToCart,
          removeFromCart,
        };
        return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
      };
      
   
const useShop = () => {
    const context = useContext(ShopContext);
  
    if (context === undefined) {
      throw new Error("useShop must be used within ShopContext");
    }
    return context;
  };
  export default useShop;
  


