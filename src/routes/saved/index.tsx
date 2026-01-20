import type { FastifyPluginCallback } from "fastify";
import {PageHeader} from "@/components/PageHeader.tsx";

export const savedRoute: FastifyPluginCallback = (fastify, _opts) => {
    fastify.get("/saved", async (_req, res) => {
        res.setTitle("Saved - Nyaa Watcher");

        return res.send(<>
            <PageHeader
                title='Saved'
                subtitle='View and manage your saved torrents here.'
            />
        </>);
    });
}
