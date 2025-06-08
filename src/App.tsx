import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { AppRoutes } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <AppRoutes />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
