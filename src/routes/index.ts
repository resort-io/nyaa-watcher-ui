import type { FastifyPluginCallback } from "fastify";
import rootRoute from '@/routes/root';

const routes: FastifyPluginCallback = (fastify, _opts) => {
    fastify.register(rootRoute);
}

export default routes;
