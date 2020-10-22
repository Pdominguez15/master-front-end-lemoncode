import React from "react";
import * as classes from "./centered.layout.styles";

export const CenteredLayout: React.FunctionComponent = (props) => {
  //Props
  const { children } = props;

  return (
    <>
      <div className={classes.centerLayout}>{children}</div>
    </>
  );
};
