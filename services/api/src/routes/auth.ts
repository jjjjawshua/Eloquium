import { FastifyPluginAsync } from "fastify";
import { prisma } from "../index";

const authRoutes: FastifyPluginAsync = async (app) => {
  app.post("/register", async (request, reply) => {
    // TODO: Implement registration with bcrypt + JWT
    return { message: "Registration endpoint - implement with bcrypt + JWT" };
  });

  app.post("/login", async (request, reply) => {
    // TODO: Implement login
    return { message: "Login endpoint - implement with bcrypt + JWT" };
  });
};

export default authRoutes;
