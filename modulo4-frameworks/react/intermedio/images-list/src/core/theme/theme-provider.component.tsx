import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import StylesProvider from "@material-ui/styles/StylesProvider";

export const ThemeProviderComponent = (props) => {
  const { children } = props;

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      {children}
    </StylesProvider>
  );
};
