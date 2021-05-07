module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testEnvironment: "node",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  setupFilesAfterEnv: ["./tests/unit/setup.js"],
};
