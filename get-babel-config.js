module.exports = (envConfig = { modules: "commonjs" }) => ({
  presets: [["@babel/env", envConfig]]
});
