const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  mode: "development",

  /* entry: Define o ponto de entrada do aplicativo, que é o arquivo inicial onde o Webpack começará a criar a árvore de dependências. */
  /*output: Especifica onde e como o Webpack deve salvar o arquivo empacotado após processar o projeto. */
  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve("src", "assets", "pet-paw.svg"),
    }),
  ],
};
