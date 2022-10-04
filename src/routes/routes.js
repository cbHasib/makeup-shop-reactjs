import { createBrowserRouter } from "react-router-dom";
import ProductViewType from "../components/ProductViewType/ProductViewType";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <div>Product</div>,
      },
      {
        path: "/products/type/:typeSlug",
        loader: async ({ params }) => {
          return fetch(
            `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${params.typeSlug}`
          );
        },
        element: <ProductViewType />,
      },
      {
        path: "/product/details/:productId",
        loader: async ({ params }) => {
          return fetch(
            `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${params.typeSlug}`
          );
        },
        element: <ProductViewType />,
      },
    ],
  },

  {
    path: "*",
    element: <div>404 error</div>,
  },
]);
