import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Disabled, ProductsContainer, ShopsContainer } from "./Home.styled";
import { useSelector } from "react-redux";
import { selectShop } from "../../redux/shopSlice";

export const Home = () => {
  const shop = useSelector(selectShop);
  const location = useLocation();
  const path = location.pathname;
  console.log("path:", path);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <ShopsContainer>
        Shops:
        {shop === "/mcdonalds" || shop === "" ? (
          <NavLink to="/mcdonalds">McDonalds</NavLink>
        ) : (
          <Disabled>McDonalds</Disabled>
        )}
        {shop === "/kfc" || shop === "" ? (
          <NavLink to="/kfc">KFC</NavLink>
        ) : (
          <Disabled>KFC</Disabled>
        )}
        {shop === "/murakami" || shop === "" ? (
          <NavLink to="/murakami">Murakami</NavLink>
        ) : (
          <Disabled>Murakami</Disabled>
        )}
      </ShopsContainer>
      <ProductsContainer>
        {path === "/" && <h3>Choose a shop and make order</h3>}
        <Outlet />
      </ProductsContainer>
    </div>
  );
};
