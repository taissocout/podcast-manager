import http from "http";
import { router } from "./routes/router";
import { applySecurityHeaders, applyRateLimit } from "./middlewares/security.middleware";

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3333;

const server = http.createServer((req, res) => {
  applySecurityHeaders(res);
  const allowed = applyRateLimit(req, res);
  if (!allowed) return;
  router(req, res);
});

server.listen(PORT, () => {
  console.log(`🎙️  Podcast Manager API running on http://localhost:${PORT}`);
  console.log(`   GET /health`);
  console.log(`   GET /api/list`);
  console.log(`   GET /api/episode?podcastName=flow`);
});

server.on("error", (err: NodeJS.ErrnoException) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Set a different PORT in .env`);
  } else {
    console.error("Server error:", err.message);
  }
  process.exit(1);
});
