module.exports= {

  "transform": {
    "^.+\\.js$": "babel-jest"
  },

  "moduleFileExtensions": [
    "js",
    "jsx"
  ],

  "moduleNameMapper": {
    "\\.(css|scss)$": "identity-obj-proxy",

    "Components": "<rootDir>/app/components",
    "Container": "<rootDir>/app/container"
  },

  "verbose": true,
}
