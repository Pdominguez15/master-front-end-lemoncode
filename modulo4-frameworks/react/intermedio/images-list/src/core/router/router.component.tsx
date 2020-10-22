import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { PhoneImagesListScene, LaptopImagesListScene } from "scenes/principal";

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={switchRoutes.root}
          component={PhoneImagesListScene}
        />
        <Route
          exact={true}
          path={switchRoutes.phone}
          component={PhoneImagesListScene}
        />
        <Route
          exact={true}
          path={switchRoutes.laptop}
          component={LaptopImagesListScene}
        />
      </Switch>
    </Router>
  );
};
