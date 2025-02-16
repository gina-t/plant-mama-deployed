import { useContext } from "react";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "./ShoppingCartContext";

const useShoppingCart = (): ShoppingCartContextType => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider",
    );
  }
  return context;
};

export default useShoppingCart;
