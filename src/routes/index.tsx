import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import TabsComponent from "../pages/tabs-component";
import Loading from "../components/loading";
import Login from "../pages/login";
import About from "../pages/about";
import Transition from "../pages/view-transition";
import Layout from "../components/Layout";

const routes = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "tabs",
        element: <TabsComponent />,
      },
      {
        path: "loading",
        element: <Loading />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "transition/:id",
        element: <Transition />,
      },
      {
        path: "about",
        element: <About />,
      },
      {},
    ],
  },
];
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="tabs" element={<TabsComponent />} />
//   <Route path="loading" element={<Loading />} />
//   <Route path="login" element={<Login />} />
//   <Route path="transition/:id" element={<Transition />} />
//   <Route path="about" element={<About />} />
// </Routes>
export const router = createBrowserRouter(routes);
