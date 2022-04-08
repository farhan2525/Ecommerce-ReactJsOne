import {
  FavoriteBorderOutlined,
  SearchOffOutlined,
  SearchOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";

function Product({ item }) {
  // HoverState
  const [hoverEffect, setHoverEffect] = useState(" opacity-0");
  const handleHoverEnter = () => {
    setHoverEffect(" opacity-1 bg-[rgba(0,0,0,.2)]");
  };
  const handleHoverExit = () => {
    setHoverEffect(" opacity-0");
  };
  // Style Icons

  const iconStyle =
    "bg-white cursor-pointer m-3 h-[40px] w-[40px] rounded-full flex items-center justify-center hover:bg-[#894af3] hover:text-white hover:scale[1.1] ease-in duration-100 cursor-pointer";

  return (
    <div
      className="flex flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img src={item.src} alt="product-img" />

      <div
        className={
          ` flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100` +
          hoverEffect
        }
      >
        {/* Icons */}
        <div className={iconStyle}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <div className={iconStyle}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
}

export default Product;
