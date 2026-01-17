import type { FastifyPluginCallback } from "fastify";

export const exploreRoute: FastifyPluginCallback = (fastify, _opts) => {
    fastify.get("/explore", async (_req, res) => {
        res.setTitle("Explore - Nyaa Watcher");

        return res.send(<>
            <h1>Explore</h1>
            <button type="button" id="toggle-sidebar-btn" className="btn">
                Toggle Sidebar
            </button>
        </>);
    });
}
