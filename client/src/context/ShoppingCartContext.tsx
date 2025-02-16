import React, { createContext, useState, useEffect } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  quantity: number;
  inStock: boolean;
  imageUrl: string;
  shippingInfo: string;
}

export interface ShoppingCartContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  cartTotal: number;
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined,
);

const ShoppingCartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem("cart");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Product) => {
    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      } else {
        return [...prevProducts, { ...product, quantity: 1 }];
      }
    });
  };

  const removeProduct = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId),
    );
  };

  const cartTotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  return (
    <ShoppingCartContext.Provider
      value={{ products, addProduct, removeProduct, cartTotal }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
