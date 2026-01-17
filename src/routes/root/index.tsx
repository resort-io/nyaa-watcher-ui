import type { FastifyPluginCallback } from "fastify";

const route: FastifyPluginCallback = (fastify, _opts) => {
    fastify.get("/", async (_req, res) => {
        res.setTitle("Root");

        return res.send(<>
            <div>Root</div>
        </>);
    });
}

export default route;
