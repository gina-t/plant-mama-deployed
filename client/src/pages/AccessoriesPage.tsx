import ProductCards from "../components/ProductCards.tsx";

const accessories = [
  {
    id: 1,
    name: "Plant Care Kit",
    href: "/accessories/plant-care",
    price: "$20",
    imageSrc: "",
    imageAlt: "Plant care kit.",
  },
  // Add more accessory products here
];

export default function AccessoriesPage() {
  return (
    <div>
      <h1 className="header py-5 text-center text-2xl">Plant Accessories</h1>
      <ProductCards products={accessories} />
    </div>
  );
}
