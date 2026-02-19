import { FastifyPluginAsync } from "fastify";
import { prisma } from "../index";

const creatorRoutes: FastifyPluginAsync = async (app) => {
  app.get("/:username", async (request, _reply) => {
    const { username } = request.params as Record<string, string>;
    const creator = await prisma.user.findUnique({
      where: { username },
      select: {
        id: true, name: true, username: true, avatar: true, bio: true, tagline: true,
        coverImage: true, tier: true, createdAt: true,
        _count: { select: { posts: true, subscriptionsAsCreator: true } },
      },
    });
    if (!creator) return reply.status(404).send({ error: "Creator not found" });
    return creator;
  });

  app.get("/", async (request, _reply) => {
    const { topic: _topic, sort: _sort = "subscribers" } = request.query as Record<string, string>;
    const creators = await prisma.user.findMany({
      where: { posts: { some: { published: true } } },
      select: {
        name: true, username: true, avatar: true, tagline: true, tier: true,
        _count: { select: { posts: true, subscriptionsAsCreator: true } },
      },
      take: 20,
    });
    return creators;
  });
};

export default creatorRoutes;
