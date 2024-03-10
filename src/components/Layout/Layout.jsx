import React from "react";
import { NavLink } from "react-router-dom";
import { StyleMain } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <StyleMain>
      <header className="headerStyle">
        <NavLink className = 'header-link' to='/' >Home</NavLink>
        <NavLink className = 'header-link' to='/catalog' >Catalog</NavLink>
        <NavLink className = 'header-link' to='/favorites' >Favorites</NavLink>
      </header>
      <main className="mainStyle">{children}</main>
    </StyleMain>
  );
};

export default Layout;