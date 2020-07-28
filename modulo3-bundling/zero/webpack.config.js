//Configuración de webpack

//Cojemos el path base "src"
const path = require("path");
const basePath = __dirname;

//Importamos el plugin HtmlWebpackPlugin, para que nos enlace el html con el bundle
const HtmlWebpackPlugin = require("html-webpack-plugin");

//Importamos el plugin MiniCSSExtractPlugin, para que nos genere los ficheros css necesarios para el bundle
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //Utilizamos como punto de entrada a nuestra aplicación el path "src"
  context: path.join(basePath, "src"),

  //Extensiones con la que va a trabajar, para ahorrarnos incluirlo en los imports
  resolve: {
    extensions: [".js", ".ts"],
  },

  //Mostrar solo errores
  stats: "errors-only",

  //Fichero de entrada de la aplicación
  entry: {
    app: "./index.ts",
    appStyles: ["./mystyles.scss"],
  },

  //Ficheros de salida(Bundle), donde hasheamos el nombre del fichero para evitar la cache
  output: {
    filename: "[name].[chunkhash].js",
  },

  //Manejo de ficheros
  module: {
    rules: [
      //Transpilar los ficheros ts a js con babel
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      //Transpilar los ficheros de sass con sass loader, para pasarselo a css loader y luego a MiniCssExtractPlugin
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      //Transpilar los ficheros de css con css loader y luego con MiniCssExtractPlugin
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
      //Transpilar las imagenes y si la imagen es superior a 5000 lo saca a un fichero aparte del bundle
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: "url-loader?limit=5000",
      },

      //Transpilar los archivos que nos encontremos incrustados dentro del html(por ejemplo una imagen)
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    //Usamos el plugin HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      //Nombre de salida del fichero
      filename: "index.html",
      //Nombre de entrada del fichero
      template: "index.html",
    }),
    //Usamos el plugin MiniCssExtractPlugin
    new MiniCSSExtractPlugin({
      //Nombre de salida del fichero, con cualquier nombre
      filename: "[name].css",
      //Le añadimos un identificador(hash), al nombre que tiene para evitar la cache del navegador
      chunkFilename: "[id].css",
    }),
  ],
};
