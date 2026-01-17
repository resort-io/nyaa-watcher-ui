import fp from "fastify-plugin";
import { fastifyJhx } from '@jhxdev/fastify'

export default fp(async (fastify, _opts) => {
    await fastify.register(fastifyJhx, {});
});
