"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import useShoppingCart from "../context/useShoppingCart";

interface Product {
  id: string;
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  quantity: number;
  inStock: boolean; 
  images: {
    id: number;
    name: string;
    src: string;
    alt: string;
  }[];
  description: string;
  details: {
    name: string;
    items: string[];
  }[];
}

interface ProductOverviewProps {
  product: Product;
  onAddToCart: () => void;
}

export default function ProductOverview({
  product,
  onAddToCart,
}: ProductOverviewProps) {
  const { addProduct } = useShoppingCart();

  const handleAddToCart = () => {
    addProduct({ ...product, quantity: 1 });
    onAddToCart();
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Product info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {product.name}
          </h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {product.price}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>

            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
              className="space-y-6 text-base text-gray-700"
            />
          </div>

          <form
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleAddToCart();
            }}
          >
            <div className="mt-10 flex">
              <button
                type="submit"
                className="focus:outline-hidden flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
              >
                Add to bag
              </button>

              <button
                type="button"
                className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <HeartIcon aria-hidden="true" className="size-6 shrink-0" />
                <span className="sr-only">Add to favorites</span>
              </button>
            </div>
          </form>

          <section aria-labelledby="details-heading" className="mt-12">
            <h2 id="details-heading" className="sr-only">
              Additional details
            </h2>

            <div className="divide-y divide-gray-200 border-t">
              {product.details.map((detail) => (
                <Disclosure key={detail.name} as="div">
                  <h3>
                    <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                      <span className="group-data-open:text-indigo-600 text-sm font-medium text-gray-900">
                        {detail.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="group-data-open:hidden block size-6 text-gray-400 group-hover:text-gray-500"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="group-data-open:block hidden size-6 text-indigo-400 group-hover:text-indigo-500"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pb-6">
                    <ul
                      role="list"
                      className="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300"
                    >
                      {detail.items.map((item) => (
                        <li key={item} className="pl-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
