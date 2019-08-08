module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["js", "ts", "tsx"],
  testEnvironment: "node",
  testMatch: ["**/__tests__/*.+(ts|tsx|js)"],
  testPathIgnorePatterns: ["dist"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  preset: "ts-jest"
};
