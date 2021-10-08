import data from "./package.json";

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  displayName: `${data.name}-test`,
  testMatch: ["<rootDir>/test/**/*.test.ts"],
};
