import type { FastifyPluginCallback } from "fastify";

export const exploreRoute: FastifyPluginCallback = (fastify, _opts) => {
    fastify.get("/explore", async (_req, res) => {
        res.setTitle("Explore - Nyaa Watcher");

        return res.send(<>
            <h1>Explore</h1>
        </>);
    });
}
