import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apolloClient";
import "./index.css";
import App from "./App.tsx";
import StoreFrontPage from "./pages/StoreFrontPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.tsx";
import OrderDetailsPage from "./pages/OrderDetailsPage.tsx";
import SpecialOffersPage from "./pages/SpecialOffersPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import AboutUsPage from "./pages/AboutUsPage.tsx";

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
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <ShoppingCartPage />,
      },
      {
        path: "/order-details",
        element: <OrderDetailsPage />,
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
      <RouterProvider router={router} />
    </ApolloProvider>,
  );
}
