import { RouterProvider } from "react-router-dom";
import router from "./components/Router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
