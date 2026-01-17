import type { FastifyPluginCallback } from "fastify";

export const subscriptionsRoute: FastifyPluginCallback = (fastify, _opts) => {
    fastify.get("/subscriptions", async (_req, res) => {
        res.setTitle("Subscriptions - Nyaa Watcher");

        return res.send(<>
            <h1>Subscriptions</h1>
            <button type="button" id="toggle-sidebar-btn" className="btn">
                Toggle Sidebar
            </button>
        </>);
    });
}
