import type { FastifyPluginCallback } from "fastify";
import { exploreRoute } from "@/routes/explore";
import { homeRoute } from '@/routes/home';
import { savedRoute } from "@/routes/saved";
import { settingsRoute } from "@/routes/settings";
import { subscriptionsRoute } from "@/routes/subscriptions";

const routes: FastifyPluginCallback = (fastify, _opts) => {
    fastify.register(exploreRoute);
    fastify.register(homeRoute);
    fastify.register(savedRoute);
    fastify.register(settingsRoute);
    fastify.register(subscriptionsRoute);
}

export default routes;
