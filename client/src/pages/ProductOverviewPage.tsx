"use client";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import plantData from "../data/products.json";
import aglaonema from "../assets/images/aglaonema.jpg";
import anthurium from "../assets/images/anthurium.jpg";
import monstera from "../assets/images/monstera.jpg";
import begonia from "../assets/images/begonia.jpg";
import fiddleLeafFig from "../assets/images/fiddle-leaf-fig.jpg";
import oleaEuropaea from "../assets/images/olea-europaea.jpg";
import philodendron from "../assets/images/philodendron.jpg";
import useShoppingCart from "../context/useShoppingCart";

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
    inStock: plant.stock > 0, // Correctly name the inStock property
  };
});

export default function ProductOverviewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addProduct } = useShoppingCart();
  const product = products.find((p) => p.id === id);
  const [open, setOpen] = useState(true);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add the product to the cart using the context
    addProduct(product);
    // Navigate to the cart page
    navigate("/cart");
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in fixed inset-0 hidden bg-gray-500/75 transition-opacity md:block"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <DialogPanel
            transition
            className="data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in data-closed:md:translate-y-0 data-closed:md:scale-95 flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl"
          >
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>

              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
                  />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                  <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                    {product.name}
                  </h2>

                  <section
                    aria-labelledby="information-heading"
                    className="mt-3"
                  >
                    <h3 id="information-heading" className="sr-only">
                      Product information
                    </h3>

                    <p className="text-2xl text-gray-900">{product.price}</p>

                    <div className="mt-6">
                      <h4 className="sr-only">Description</h4>

                      <p className="text-sm text-gray-700">
                        {product.description}
                      </p>
                    </div>
                  </section>

                  <section aria-labelledby="options-heading" className="mt-6">
                    <form onSubmit={handleAddToCart}>
                      <div className="mt-6">
                        <button
                          type="submit"
                          className="focus:outline-hidden flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                        >
                          Add to cart
                        </button>
                      </div>

                      <p className="absolute left-4 top-4 text-center sm:static sm:mt-6">
                        <a
                          href={product.href}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          View full details
                        </a>
                      </p>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
