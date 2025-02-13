import ProductOverview from "../components/ProductOverview";
import { useParams, useNavigate } from "react-router-dom";

const products = [
  {
    id: "67a32df8a754bb6b602af92c",
    name: "Aglaonema",
    href: "/plants/aglaonema",
    price: "$64",
    imageSrc: "../assets/images/aglaonema.jpg",
    imageAlt: "Aglaonema plant.",
    images: [],
    description: "A beautiful Aglaonema plant.",
    details: [
      {
        name: "Care",
        items: ["Water regularly", "Keep in indirect sunlight"],
      },
    ],
    quantity: 1,
    inStock: true,
  },
  {
    id: "67a32df8a754bb6b602af92d",
    name: "Anthurium",
    href: "/plants/anthurium",
    price: "$42",
    imageSrc: "../assets/images/anthurium.jpg",
    imageAlt: "Anthurium plant.",
    images: [],
    description: "A beautiful Anthurium plant.",
    details: [
      {
        name: "Care",
        items: ["Water regularly", "Keep in indirect sunlight"],
      },
    ],
    quantity: 1,
    inStock: true,
  },
  {
    id: "67a32df8a754bb6b602af92e",
    name: "Monstera Deliciosa",
    href: "/plants/monstera",
    price: "$26",
    imageSrc: "../assets/images/monstera.jpg",
    imageAlt: "Monstera plant.",
    images: [],
    description: "A beautiful Monstera plant.",
    details: [
      {
        name: "Care",
        items: ["Water intermittently", "Keep in indirect sunlight"],
      },
    ],
    quantity: 1,
    inStock: true,
  },
];

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    navigate("/cart");
  };

  return (
    <div>
      <ProductOverview product={product} onAddToCart={handleAddToCart} />
    </div>
  );
}
