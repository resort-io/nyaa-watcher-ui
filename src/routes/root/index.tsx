import type { FastifyPluginCallback } from "fastify";
import { Sidebar } from "@/components/Sidebar.tsx";

const route: FastifyPluginCallback = (fastify, _opts) => {
    fastify.get("/", async (_req, res) => {
        res.setTitle("Nyaa Watcher");

        return res.send(<>
            <Sidebar />
            <main>
                <button type="button" id="toggle-sidebar-btn" className="btn">
                    Toggle Sidebar
                </button>
                {/*<h1>Content</h1>*/}
            </main>
        </>);
    });
}

export default route;
