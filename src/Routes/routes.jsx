import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Spinner from "../Components/Spinner";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import MyBooks from "../pages/MyBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <Spinner />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/myBooks",
        element: <MyBooks />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
