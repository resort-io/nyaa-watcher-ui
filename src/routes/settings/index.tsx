import type { FastifyPluginCallback } from "fastify";
import {PageHeader} from "@/components/PageHeader.tsx";

export const settingsRoute: FastifyPluginCallback = (fastify, _opts) => {
    fastify.get("/settings", async (_req, res) => {
        res.setTitle("Settings - Nyaa Watcher");

        return res.send(<>
            <PageHeader
                title='Settings'
                subtitle='Manage your application settings and preferences here.'
            />
        </>);
    });
}
