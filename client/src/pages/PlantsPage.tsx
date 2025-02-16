import { Link } from "react-router-dom";
import plantData from "../data/products.json";
import aglaonema from "../assets/images/aglaonema.jpg";
import anthurium from "../assets/images/anthurium.jpg";
import monstera from "../assets/images/monstera.jpg";
import begonia from "../assets/images/begonia.jpg";
import fiddleLeafFig from "../assets/images/fiddle-leaf-fig.jpg";
import oleaEuropaea from "../assets/images/olea-europaea.jpg";
import philodendron from "../assets/images/philodendron.jpg";

// Map image paths to the products
const products = plantData.map((plant) => {
  let imageSrc;

  switch (plant.name) {
    case "Aglaonema":
      imageSrc = aglaonema;
      break;
    case "Anthurium":
      imageSrc = anthurium;
      break;
    case "Monstera Deliciosa":
      imageSrc = monstera;
      break;
    case "Begonia Maculata":
      imageSrc = begonia;
      break;
    case "Fiddle Leaf Fig":
      imageSrc = fiddleLeafFig;
      break;
    case "Olea Europaea":
      imageSrc = oleaEuropaea;
      break;
    case "Philodendron":
      imageSrc = philodendron;
      break;
    default:
      imageSrc = plant.imageUrl;
  }

  return {
    ...plant,
    imageSrc,
    imageAlt: plant.name,
    href: `/plants/${plant.id}`,
    inStock: plant.stock > 0,
  };
});

export default function PlantsPage() {
  return (
    <div className="bg-white">
      <h1 className="py-6 text-center text-3xl bg-white">Plants</h1>
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Plants</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} to={product.href} className="group">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full overflow-hidden rounded-lg object-cover group-hover:opacity-75 sm:aspect-2/3"
                />
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500 italic">{product.description}</p>
              </Link>
            ))}
          </div>
        </div>
    </div>
  )
}