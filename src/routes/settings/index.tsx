import type { FastifyPluginCallback } from "fastify";

export const settingsRoute: FastifyPluginCallback = (fastify, _opts) => {
    fastify.get("/settings", async (_req, res) => {
        res.setTitle("Settings - Nyaa Watcher");

        return res.send(<>
            <h1>Settings</h1>
            <button type="button" id="toggle-sidebar-btn" className="btn">
                Toggle Sidebar
            </button>
        </>);
    });
}
