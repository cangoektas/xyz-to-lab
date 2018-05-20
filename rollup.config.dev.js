import babel from "rollup-plugin-babel";

const getBabelConfig = require("./get-babel-config");

export default {
  input: "src/index.js",
  plugins: [babel(getBabelConfig({ modules: false }))],
  output: [
    {
      file: "lib/xyz-to-lab.cjs.js",
      format: "cjs"
    },
    {
      file: "lib/xyz-to-lab.es.js",
      format: "es"
    },
    {
      file: "lib/xyz-to-lab.js",
      format: "umd",
      name: "xyzToLab"
    }
  ]
};
