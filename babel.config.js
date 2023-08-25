module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react', {targets: {node: 'current'}}],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
    '@babel/preset-typescript'
  ]
};