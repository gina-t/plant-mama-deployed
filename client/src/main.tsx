import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import StoreFrontPage from "./pages/StoreFrontPage.tsx";
import ProductOverviewPage from "./pages/ProductOverviewPage.tsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.tsx";
import SpecialOffersPage from "./pages/SpecialOffersPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import AboutUsPage from "./pages/AboutUsPage.tsx";
import PlantsPage from "./pages/PlantsPage.tsx";
import PotsPage from "./pages/PotsPage.tsx";
import AccessoriesPage from "./pages/AccessoriesPage.tsx";
import NewArrivalsPage from "./pages/NewArrivalsPage.tsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import ThankyouPage from "./pages/ThankyouPage.tsx";

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
        path: "plants",
        element: <PlantsPage />,
      },
      {
        path: "pots",
        element: <PotsPage />,
      },
      {
        path: "accessories",
        element: <AccessoriesPage />,
      },
      {
        path: "plants/:id",
        element: <ProductOverviewPage />,
      },
      {
        path: "new-arrivals",
        element: <NewArrivalsPage />,
      },
      {
        path: "cart",
        element: <ShoppingCartPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "special-offers",
        element: <SpecialOffersPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "thankyou",
        element: <ThankyouPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  );
}
