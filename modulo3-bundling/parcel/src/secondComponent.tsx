import React from "react";
import { getNombre } from "./componentService";

//Me traigo los estilos del componenteç
const styles = require("./secondComponentStyles.scss");

export const SecondComponent = () => {
  const [nombre, setNombre] = React.useState("");

  React.useEffect(() => {
    const nuevoNombre = "segundo";
    setNombre(getNombre(nuevoNombre));
  }, []);

  return (
    <div>
      <span className={styles.message}>Este es mi, {nombre}</span>
    </div>
  );
};
