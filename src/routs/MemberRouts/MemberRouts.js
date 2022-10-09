import React from "react";
import { lazy } from "react";

const CartPage = lazy(() => import("../../pages/CartPage/index"));
const UserPage = lazy(() => import("../../pages/UserPage/index"));
const MemberRouts = [
  { id: `${Math.random()}`, path: "cart", component: <CartPage /> },
  { id: `${Math.random()}`, path: "profile", component: <UserPage /> },
];

export default MemberRouts;
