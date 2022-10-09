import React, { lazy } from "react";
import HomePage from "../../pages/HomePage";
const AllProductPage = lazy(() => import("../../pages/AllProductPage/index"));
const SearchPage = lazy(() => import("../../pages/SearchPage/index"));
const SignINPage = lazy(() => import("../../pages/SignINPage/index"));
const SignUpPage = lazy(() => import("../../pages/SignUpPage/index"));
const ProductPage = lazy(() => import("../../pages/ProductPage/index"));
const PublicRouts = [
  { id: `${Math.random()}`, path: "/", component: <HomePage /> },
  { id: `${Math.random()}`, path: "signin", component: <SignINPage /> },
  { id: `${Math.random()}`, path: "signup", component: <SignUpPage /> },
  { id: `${Math.random()}`, path: "product/:id", component: <ProductPage /> },
  { id: `${Math.random()}`, path: "search/:text", component: <SearchPage /> },
  {
    id: `${Math.random()}`,
    path: "allProducts",
    component: <AllProductPage />,
  },
];

export default PublicRouts;
