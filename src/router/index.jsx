// import { lazy } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

// const App = lazy(() => import("../App"));
// const Error = lazy(() => import("../pages/Error/Error"));
// const Home = lazy(() => import("../pages/Home/Home"));
// const Category = lazy(() => import("../pages/category/Category"));
// const CategoryItem = lazy(() => import("../pages/category/CategoryItem"));
// const Product = lazy(() => import("../pages/product/Product"));
// const ProductItem = lazy(() => import("../pages/product/ProductItem"));
// const Subcategory = lazy(() => import("../pages/subcategory/Subcategory"));
// const SubcategoryItem = lazy(() => import("../pages/subcategory/SubcategoryItem"));
// const Cart = lazy(() => import("../pages/cart/Cart"));

import App from "../App";
import Error from './../pages/Error/Error';
import Home from './../pages/Home/Home';
import Category from './../pages/category/Category';
import CategoryItem from './../pages/category/CategoryItem';
import Product from './../pages/product/Product';
import ProductItem from './../pages/product/ProductItem';
import Subcategory from './../pages/subcategory/Subcategory';
import SubcategoryItem from './../pages/subcategory/SubcategoryItem';
import Cart from './../pages/cart/Cart';
import Liked from "../pages/Liked";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/category",
                element: <Category />,
            },
            {
                path: "/category/:slug",
                element: <CategoryItem />,
            },
            {
                path: "/product",
                element: <Product />,
            },
            {
                path: "/product/:slug",
                element: <ProductItem />,
            },
            {
                path: "/subcategory",
                element: <Subcategory />,
            },
            {
                path: "/subcategory/:slug",
                element: <SubcategoryItem />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/liked",
                element: <Liked />,
            }
        ],
    },
]);

export default router;
