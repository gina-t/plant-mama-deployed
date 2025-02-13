import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apolloClient";
import "./index.css";
import App from "./App.tsx";
import StoreFrontPage from "./pages/StoreFrontPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.tsx";

import SpecialOffersPage from "./pages/SpecialOffersPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import AboutUsPage from "./pages/AboutUsPage.tsx";
import PlantsPage from "./pages/PlantsPage.tsx";
import PotsPage from "./pages/PotsPage.tsx";
import AccessoriesPage from "./pages/AccessoriesPage.tsx";
import NewArrivalsPage from "./pages/NewArrivalsPage.tsx";
import GardenDesignPage from "./pages/GardenDesignPage.tsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
        element: <StoreFrontPage />,
      },
      {
        path: "/plants",
        element: <PlantsPage />,
      },
      {
        path: "/pots",
        element: <PotsPage />,
      },
      {
        path: "/accessories",
        element: <AccessoriesPage />,
      },
      {
        path: "/garden-design",
        element: <GardenDesignPage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/new-arrivals",
        element: <NewArrivalsPage />,
      },
      {
        path: "/cart",
        element: <ShoppingCartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/special-offers",
        element: <SpecialOffersPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <ApolloProvider client={client}>
      <ShoppingCartProvider>
        <RouterProvider router={router} />
      </ShoppingCartProvider>
    </ApolloProvider>,
  );
}
