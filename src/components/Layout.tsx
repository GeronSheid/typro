import React from "react";
import { Menu } from "./Menu";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div style={{display: 'flex'}}>
      <Menu />
      <Outlet />
    </div>
  );
};
