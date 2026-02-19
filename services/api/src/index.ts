import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = Fastify({ logger: true });

// Plugins
app.register(cors, { origin: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000" });

// Health check
app.get("/health", async () => ({ status: "ok", timestamp: new Date().toISOString() }));

// API routes
app.register(import("./routes/auth"), { prefix: "/api/auth" });
app.register(import("./routes/posts"), { prefix: "/api/posts" });
app.register(import("./routes/creators"), { prefix: "/api/creators" });

// Start server
const start = async () => {
  try {
    await prisma.$connect();
    await app.listen({ port: parseInt(process.env.PORT || "4000"), host: "0.0.0.0" });
    console.log("Openly API running on port " + (process.env.PORT || 4000));
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

export { prisma };
