import { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext.tsx";

const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider",
    );
  }
  return context;
};

export default useShoppingCart;
