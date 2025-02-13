import ProductCards from "../components/ProductCards.tsx";

const pots = [
  {
    id: 1,
    name: "Ceramic Pot",
    href: "/pots/ceramic",
    price: "$35",
    imageSrc: "",
    imageAlt: "Ceramic pot.",
  },
  // Add more pot products here
];

export default function PotsPage() {
  return (
    <div>
      <h1 className="header py-5 text-center text-2xl">Pots & Planters</h1>
      <ProductCards products={pots} />
    </div>
  );
}
