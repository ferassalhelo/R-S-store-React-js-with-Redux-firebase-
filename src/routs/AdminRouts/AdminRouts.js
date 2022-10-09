import React from "react";
import { lazy } from "react";
const NewProductPage = lazy(() => import("../../pages/NewProductPage"));
const DashBordPage = lazy(() => import("../../pages/DashBordPage/index"));

const AdminRouts = [
  {
    id: `${Math.random()}`,
    path: "Dashboard",
    component: <DashBordPage />,
  },
  {
    id: `${Math.random()}`,
    path: "NewProduct",
    component: <NewProductPage />,
  },
];

export default AdminRouts;
