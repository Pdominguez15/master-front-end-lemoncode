import React from "react";
import { ListContainer } from "pods/list";
import { CartContainer } from "pods/cart";
export const LaptopImagesListScene: React.FC = () => {
  return (
    <>
      <ListContainer type={"laptop"} />
      <CartContainer />
    </>
  );
};
