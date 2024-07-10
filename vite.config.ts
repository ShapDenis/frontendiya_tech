import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [svgr(), dts(), react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@services": path.resolve(__dirname, "./src/services "),
		},
	},
	define: {
		"process.env": process.env,
	},
});
