import { fileURLToPath, URL } from "url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: "./vitest-setup.ts",
    environment: "jsdom",
    // TODO: remove include prop after Vitest migration
    include: ["./src/**/*.spec.?(c|m)[jt]s?(x)"],
    coverage: {
      reporter: ["lcov", "text"],
      exclude: [
        "src/**/*.stories.tsx",
        "coverage",
        ".next",
        "**/*.config.?(c|m)js",
        ".storybook",
        "**/layout.tsx",
      ],
      thresholds: {
        "100": true,
      },
    },
    outputFile: "coverage/sonar-report.xml",
    globals: true,
  },
  resolve: {
    alias: [
      {
        find: "@/",
        replacement: new URL("./src/", import.meta.url).pathname,
      },
    ],
  },
});
