import fp from "fastify-plugin";
import { createElement, isValidElement } from "react";
import { renderToString } from "react-dom/server";
import type { FastifyReply } from "fastify";
import { Head } from "@/components/Head";
import { Body } from "@/components/Body";

const defaultPageTitle = 'Nyaa Watcher';

export interface PartialPagePluginOptions {
    defaultTitle?: string;
}

export default fp<PartialPagePluginOptions>(async (fastify, {
    defaultTitle = defaultPageTitle,
}) => {
    fastify.decorateReply('isPartialPage', false);
    fastify.decorateReply('pageTitle', null);

    fastify.decorateReply('setTitle', function (this: FastifyReply, title: string): FastifyReply {
        this.pageTitle = title;
        return this;
    });

    fastify.decorateReply('sendPartial', function <P>(this: FastifyReply, payload: P): FastifyReply {
        this.isPartialPage = true;
        return this.send(payload);
    });

    fastify.addHook('preSerialization', async (req, res, payload) => {
        try {
            if (payload && typeof payload === 'object' && isValidElement(payload)) {
                res.type('text/html; charset=utf-8');

                if (res.isPartialPage || req.headers['hx-request'] === 'true') {
                    if (res.pageTitle) {
                        res.header('x-page-title', res.pageTitle);
                    }
                    return renderToString(payload);
                }

                return "<!DOCTYPE html>" + renderToString(createElement(
                    "html",
                    {
                        lang: "en",
                    },
                    Head({ title: res.pageTitle ?? defaultTitle }),
                    Body({ children: payload })
                ));
            }
            return payload;
        } catch (e) {
            fastify.log.error(`'preSerialization' Hook Error: ${JSON.stringify(e, null, 2)}`)
            return payload;
        }
    })

    fastify.addHook('onSend', async (_req, _res, payload) => {
        // Removing the wrapped quotes and escaped quotes from the serialization
        if (typeof payload === 'string' && payload.length >= 4 && payload.startsWith('"<') && payload.endsWith('>"')) {
            return payload.slice(1, -1).replaceAll('\\"', '"');
        }
        return payload;
    })
});

declare module 'fastify' {
    export interface FastifyReply {
        isPartialPage: boolean;
        pageTitle: string | null;
        setTitle(title: string): FastifyReply;
        sendPartial<P>(payload: P): FastifyReply;
    }
}
