//Importamos webpack merge, para juntar nuestro webpack y comun y el especifico de desarrollo
const { merge } = require("webpack-merge");

//Importamos dot env, para configurar nuestras variables de entorno
const Dotenv = require("dotenv-webpack");

//Importamos el fichero de configuración comun
const common = require("./webpack.common");

module.exports = merge(common, {
  //Modo de ejecución
  mode: "development",
  //Para depurar mejor con ts
  devtool: "inline-source-map",
  //Mostrar solo errores en consola
  stats: "errors-only",

  //Incluimos variables de entorno
  plugins: [
    new Dotenv({
      path: "./dev.env",
    }),
  ],
});
