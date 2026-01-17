import fp from "fastify-plugin";
import { fastifyStatic } from "@fastify/static";
import { join } from "path";

export default fp(async (fastify) => {
    fastify.register(fastifyStatic, {
        root: join(__dirname, "../..", "public"),
        prefix: "/public/",
    });
});
