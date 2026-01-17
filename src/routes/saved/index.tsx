import type { FastifyPluginCallback } from "fastify";

export const savedRoute: FastifyPluginCallback = (fastify, _opts) => {
    fastify.get("/saved", async (_req, res) => {
        res.setTitle("Saved - Nyaa Watcher");

        return res.send(<>
            <h1>Saved</h1>
            <button type="button" id="toggle-sidebar-btn" className="btn">
                Toggle Sidebar
            </button>
        </>);
    });
}
