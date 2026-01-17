import type { FastifyPluginCallback } from "fastify";

export const homeRoute: FastifyPluginCallback = (fastify, _opts) => {
    fastify.get("/", async (_req, res) => {
        res.setTitle("Home - Nyaa Watcher");

        return res.send(<>
            <h1>Home</h1>
            <button type="button" id="toggle-sidebar-btn" className="btn">
                Toggle Sidebar
            </button>
        </>);
    });
}
