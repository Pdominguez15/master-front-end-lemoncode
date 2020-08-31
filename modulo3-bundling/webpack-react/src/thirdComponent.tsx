import React from "react";

//Me traigo los estilos del componente
const styles = require("./thirdComponentStyles.scss");

//Me traigo la imagen
const imagen = require("./content/lemoncode-1.png");

export const ThirdComponent = () => {
  return (
    <div>
      <img src={imagen} />
    </div>
  );
};
