import { defineConfig } from "orval";

export default defineConfig({
  uselessfacts: {
    input: "./uselessfacts-openapi.yaml",
    output: {
      target: "./src/generated/uselessfacts.ts",
      client: "fetch",
      baseUrl: { 
        getBaseUrlFromSpecification: true
      }
    },
  }
});
