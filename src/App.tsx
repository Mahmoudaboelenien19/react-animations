import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { router } from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
