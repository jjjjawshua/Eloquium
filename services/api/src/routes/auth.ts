import { FastifyPluginAsync } from "fastify";

const authRoutes: FastifyPluginAsync = async (app) => {
  app.post("/register", async (_request, _reply) => {
    // TODO: Implement registration with bcrypt + JWT
    return { message: "Registration endpoint - implement with bcrypt + JWT" };
  });

  app.post("/login", async (_request, _reply) => {
    // TODO: Implement login
    return { message: "Login endpoint - implement with bcrypt + JWT" };
  });
};

export default authRoutes;
