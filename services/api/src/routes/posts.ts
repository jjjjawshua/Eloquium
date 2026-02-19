import { FastifyPluginAsync } from "fastify";
import { prisma } from "../index";

const postRoutes: FastifyPluginAsync = async (app) => {
  // Get all published posts (paginated)
  app.get("/", async (request, reply) => {
    const { page = 1, limit = 20 } = request.query as any;
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: { author: { select: { name: true, username: true, avatar: true } }, tags: true },
      orderBy: { publishedAt: "desc" },
      take: Number(limit),
      skip: (Number(page) - 1) * Number(limit),
    });
    return posts;
  });

  // Get single post by slug
  app.get("/:username/:slug", async (request, reply) => {
    const { username, slug } = request.params as any;
    const post = await prisma.post.findFirst({
      where: { slug, author: { username }, published: true },
      include: {
        author: { select: { name: true, username: true, avatar: true, bio: true } },
        comments: { include: { author: { select: { name: true, username: true, avatar: true } } }, orderBy: { createdAt: "desc" } },
        tags: true,
        _count: { select: { likes: true, comments: true } },
      },
    });
    if (!post) return reply.status(404).send({ error: "Post not found" });
    return post;
  });

  // Create post (authenticated)
  app.post("/", async (request, reply) => {
    // TODO: Add auth middleware
    return { message: "Create post endpoint - add auth middleware" };
  });
};

export default postRoutes;
