import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import AdminRouts from "./AdminRouts/AdminRouts";
import MemberRouts from "./MemberRouts/MemberRouts";
import PublicRouts from "./PublicRouts/PublicRouts";

export default function Root() {
  const userType = useSelector((reducers) => reducers.user.userData.userType);
  return (
    <Routes>
      {PublicRouts.map((item) => (
        <Route key={item.id} path={item.path} element={item.component} />
      ))}
      {MemberRouts.map((item) => (
        <Route
          key={item.id}
          path={item.path}
          element={userType ? item.component : <Navigate to="/signin" />}
        />
      ))}
      {AdminRouts.map((item) => (
        <Route
          key={item.id}
          path={item.path}
          element={
            userType === "supplier" ? item.component : <Navigate to="/" />
          }
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
