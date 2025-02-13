import React, { createContext, useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  quantity: number;
  inStock: boolean;
}

interface ShoppingCartContextType {
  products: Product[];
  addProduct: (product: Product) => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined,
);

const ShoppingCartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem("shoppingCart");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <ShoppingCartContext.Provider value={{ products, addProduct }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
