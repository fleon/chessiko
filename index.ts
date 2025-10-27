import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = process.env.PORT || 3000;

// Backend API proxy - forward all /api requests to backend server
app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
    pathRewrite: { "^/": "/api/" }, // Re-add /api prefix (Express strips it)
    logger: console,
  })
);

// Frontend proxy - forward all other requests to frontend dev server
app.use(
  "/",
  createProxyMiddleware({
    target: "http://localhost:5173",
    changeOrigin: true,
    ws: true, // Enable WebSocket proxy for Vite HMR
    logger: console,
  })
);

// Start the reverse proxy server
app.listen(PORT, () => {
  console.log(`🔀 Reverse proxy server running on http://localhost:${PORT}`);
  console.log(`📡 Proxying /api/* to http://localhost:3001`);
  console.log(`🎨 Proxying /* to http://localhost:5173`);
  console.log(`\n💡 Make sure both backend and frontend servers are running:`);
  console.log(`   - Backend: cd packages/backend && npm run dev`);
  console.log(`   - Frontend: cd packages/frontend && npm run dev`);
});
