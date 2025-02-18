import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import dragonfly from "../assets/dragonfly.svg";
import { Link } from "react-router-dom";
import useShoppingCart from "../context/useShoppingCart";

const navigation = {
  categories: [
    {
      name: "Plants",
      to: "/plants",
    },
    {
      name: "Pots",
      to: "/pots",
    },
    {
      name: "Accessories",
      to: "/accessories",
    },
    {
      name: "About",
      to: "/about-us",
    },
  ],
};

export default function Header() {
  const { products } = useShoppingCart();
  const numItems = products.reduce((acc, product) => acc + product.quantity, 0);
 
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
            <div className="flex h-16 items-center justify-between">

              {/* Logo */}
              <div className="flex flex-1">
                <Link to="/" className="flex items-center">
                  <img
                    alt="dragonfly"
                    src={dragonfly}
                    className="h-15 w-15 animate-pulse"
                  />
                </Link>
              </div>

              {/* Navigation links */}
              <div className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                <div className="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0 justify-center">
                  {navigation.categories.map((category, categoryIdx) => (
                    <div key={categoryIdx} className="flex">
                      <div className="relative flex">
                        <Link
                          to={category.to}
                          className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-m font-bold text-gray-900 transition-colors duration-200 ease-out hover:text-[#85A98F] focus:outline-0"
                        >
                          {category.name}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-1 items-center justify-end">

                {/* Search */}
                <Link to="/plants" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                </Link>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-8">
                  <Link to="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {numItems}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>

                {/* Login/Sign up */}
                <div className="ml-4 flow-root lg:ml-8">
                  <Link
                    to="/login"
                    className="group -m-2 flex items-center p-2"
                  >
                    <UserIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      Login
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
