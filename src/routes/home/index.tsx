import type { FastifyPluginCallback } from "fastify";
import { PageHeader } from "@/components/PageHeader.tsx";

export const homeRoute: FastifyPluginCallback = (fastify, _opts) => {
    fastify.get("/", async (_req, res) => {
        res.setTitle("Home - Nyaa Watcher");

        return res.send(<>
            <PageHeader
                title='Home'
                subtitle='Welcome to Nyaa Watcher! Browse the latest torrents below.'
            />
        </>);
    });
}
