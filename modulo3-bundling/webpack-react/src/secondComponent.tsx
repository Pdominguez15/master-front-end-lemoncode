import React from "react";
import { getNombre } from "myService";

//Me traigo los estilos del componente
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
