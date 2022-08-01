import { defineConfig } from "orval";

export default defineConfig({
  petstore: {
    input: {
      target: "./openapi.yml",
    },
    output: {
      mode: "split",
      target: "api/api.ts",
      client: "react-query",
      mock: true,
      prettier: true,
    },
  },
});
