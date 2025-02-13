
import { Link } from "react-router-dom";
import aglaonema from "../assets/images/aglaonema.jpg";
import anthurium from "../assets/images/anthurium.jpg";
import monstera from "../assets/images/monstera.jpg";
import ProductCards from "../components/ProductCards.tsx";

const plants = [
  {
    id: "67a32df8a754bb6b602af92c",
    name: "Aglaonema",
    href: "/product/67a32df8a754bb6b602af92c",
    price: "$64",
    imageSrc: aglaonema,
    imageAlt: "Aglaonema plant.",
  },
  {
    id: "67a32df8a754bb6b602af92d",
    name: "Anthurium",
    href: "/product/67a32df8a754bb6b602af92d",
    price: "$42",
    imageSrc: anthurium,
    imageAlt: "Anthurium plant.",
  },
  {
    id: "67a32df8a754bb6b602af92e",
    name: "Monstera Deliciosa",
    href: "/product/67a32df8a754bb6b602af92e",
    price: "$26",
    imageSrc: monstera,
    imageAlt: "Monstera plant.",
  },
];

export default function PlantsPage() {
  return (
    <div>
      <h1 className="header py-5 text-center text-2xl">Plants</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plants.map((plant) => (
          <Link key={plant.id} to={plant.href}>
            <ProductCards product={plant} />
          </Link>
        ))}
      </div>
    </div>
  );
}
