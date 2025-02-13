import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  href: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

interface ProductCardsProps {
  product: Product;
}

export default function ProductCards({ product }: ProductCardsProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <Link key={product.id} to={product.href} className="group">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="xl:aspect-7/8 aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
            />
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {product.price}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
