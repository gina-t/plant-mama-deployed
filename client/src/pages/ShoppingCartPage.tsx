import useShoppingCart from "../context/useShoppingCart";
import ShoppingCart from "../components/ShoppingCart";

export default function ShoppingCartPage() {
  const { products } = useShoppingCart();

  return (
    <ShoppingCart products={products} />
  );
}
