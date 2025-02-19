import client from "./utils/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Banner />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ApolloProvider> 
  )
};

export default App;

// App.tsx acts as a wrapper for the entire application. It contains the <Outlet> component, which is a placeholder for the child routes defined in the router. This allows the child routes to be rendered within the App component. The child routes are defined in the router configuration and specify the components to render for each route. The App component serves as the entry point for the application and provides a common layout for all the child routes.
// import { Outlet } from "react-router-dom";
