import React from "react";
import { ListContainer } from "pods/list";
import { CartContainer } from "pods/cart";
export const PhoneImagesListScene: React.FC = () => {
  return (
    <>
      <ListContainer type={"phone"} />
      <CartContainer />
    </>
  );
};
