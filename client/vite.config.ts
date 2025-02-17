import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";
import path from "node:path";

// Load environment variables from the .env file
dotenv.config({ path: path.resolve(__dirname, "environment/.env") });

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
});


// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })