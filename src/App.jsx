import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Grandpa from "./components/Grandpa/Grandpa";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Main from "./pages/Main/Main";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("t-shirts.json")
        },
        {
          path: "home",
          element: <Home></Home>,
          loader: () => fetch("t-shirts.json")
        },
        { path: "orders", element: <Orders></Orders> },
        { path: "grandpa", element: <Grandpa></Grandpa> },
        { path: "about", element: <About></About> }
      ],
      errorElement: <ErrorPage></ErrorPage>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
