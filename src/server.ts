import Fastify from "fastify";
import AutoLoad from "@fastify/autoload";
import { join } from "path";
import routes from '@/routes'

const fastify = Fastify({ logger: true });

fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
});
fastify.register(routes);

const port = parseInt(process.env['DEV_APP_PORT'] ?? '3000');

fastify.listen({ port }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
