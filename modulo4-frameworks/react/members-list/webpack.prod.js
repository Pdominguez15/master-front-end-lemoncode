//Importamos webpack merge, para juntar nuestro webpack y comun y el especifico de produccion
const { merge } = require("webpack-merge");

//Importamos dot env, para configurar nuestras variables de entorno
const Dotenv = require("dotenv-webpack");

//Importamos imagemin para optimizar las imagenes en el proceso de build
const ImageminPlugin = require("imagemin-webpack");

//Importamos el fichero de configuración comun
const common = require("./webpack.common");

module.exports = merge(common, {
  //Modo de ejecución
  mode: "production",
  //Mostrar toda la traza de errores en consola
  stats: "verbose",

  //Incluimos variables de entorno
  plugins: [
    new Dotenv({
      path: "./prod.env",
    }),
    new ImageminPlugin({
      bail: false, // Ignore errors on corrupted images
      cache: true,
      imageminOptions: {
        // Lossless optimization with custom option
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          [
            "svgo",
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
});
