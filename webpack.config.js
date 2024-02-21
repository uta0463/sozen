const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    main: './_src/js/bundle.js',
    top: './_src/js/top.js',
  },
  output: {
    filename: "[name].js", // bundleされるファイル名
    path: path.resolve(__dirname, "dist/assets/js") //どこにbundle.jsを配置するのか？
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx|ts|tsx)$/, // どの拡張子にBabel-loaderを適用させるか
  //       exclude: /node_modules/, // 除外するファイルやディレクトリ
  //       use: [
  //         {
  //           loader: "babel-loader",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // resolve: {
  //   // import時の拡張子が不要になる
  //   // import SumType from "app/src/sumType.js"の.jsの部分
  //   extensions: [".js", ".jsx", ".ts", ".tsx"],
  // },
  // // ローカルサーバーを開く時の設定
  // devServer: {
  //   static: {
  //     // distディレクトリをdevServerで監視する
  //     directory: path.resolve(__dirname, "dist")
  //   },
  //   port: 3000
  // }
}