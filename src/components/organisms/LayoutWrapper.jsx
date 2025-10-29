import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/organisms/Header";
import { CartContext } from "@/App";

function LayoutWrapper() {
  const { cartItems, setShowCartSidebar } = useContext(CartContext);

  const cartItemCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <>
      <Header
        cartItemCount={cartItemCount}
        onMenuClick={() => setShowCartSidebar(true)}
      />
      <Outlet />
    </>
  );
}

export default LayoutWrapper;