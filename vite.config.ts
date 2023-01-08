import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tsconfig from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  // resolve: {
  //   alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  // },
});
