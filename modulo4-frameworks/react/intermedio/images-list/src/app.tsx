import React from "react";
import { MyContextProvider } from "common-app/context";
import { RouterComponent } from "core/router";
import { CenteredLayout } from "layout/centerLayout";
import { ThemeProviderComponent } from "core/theme";
export const App: React.FunctionComponent = () => {
  return (
    <>
      <ThemeProviderComponent>
        <MyContextProvider>
          <CenteredLayout>
            <RouterComponent />
          </CenteredLayout>
        </MyContextProvider>
      </ThemeProviderComponent>
    </>
  );
};
