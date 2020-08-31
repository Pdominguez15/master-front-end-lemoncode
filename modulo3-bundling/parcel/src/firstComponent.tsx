import React from "react";
import { getNombre } from "./componentService";

//Me traigo los estilos del componente
const styles = require("./firstComponentStyles.scss");

export const FirstComponent = () => {
  const [nombre, setNombre] = React.useState("");

  React.useEffect(() => {
    const nuevoNombre = "primer";
    setNombre(getNombre(nuevoNombre));
  }, []);

  return (
    <div>
      <span className={styles.message}>Este es mi, {nombre}</span>
    </div>
  );
};
