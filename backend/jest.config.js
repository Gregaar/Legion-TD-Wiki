module.exports = {
  collectCoverage: true,
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  testEnvironment: "node",
  testMatch: [
    "**/src/**/__tests__/**/*.spec.(ts|js)",
    "**/tests/integration/*.spec.(ts|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
