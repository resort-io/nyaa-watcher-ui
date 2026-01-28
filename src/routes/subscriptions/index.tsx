import type { FastifyPluginCallback } from "fastify";
import {PageHeader} from "@/components/PageHeader.tsx";

export const subscriptionsRoute: FastifyPluginCallback = (fastify, _opts) => {
    fastify.get("/subscriptions", async (_req, res) => {
        res.setTitle("Subscriptions - Nyaa Watcher");

        return res.send(<>
            <PageHeader>
                Subscriptions
            </PageHeader>
        </>);
    });
}
