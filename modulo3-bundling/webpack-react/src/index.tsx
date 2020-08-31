import React from "react";
import ReactDom from "react-dom";
import { FirstComponent } from "./firstComponent";
import { SecondComponent } from "./secondComponent";
import { ThirdComponent } from "./thirdComponent";

ReactDom.render(
  <div>
    <h1>Hello from React DOM con Webpack</h1>
    <div>
      <img src={require("./content/lemoncode-2.png")} />
    </div>
    <FirstComponent />
    <SecondComponent />
    <ThirdComponent />
  </div>,
  document.getElementById("root")
);
