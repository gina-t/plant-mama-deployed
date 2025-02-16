// App.tsx acts as a wrapper for the entire application. It contains the <Outlet> component, which is a placeholder for the child routes defined in the router. This allows the child routes to be rendered within the App component. The child routes are defined in the router configuration and specify the components to render for each route. The App component serves as the entry point for the application and provides a common layout for all the child routes.
// import { Outlet } from "react-router-dom";

import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Banner />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;