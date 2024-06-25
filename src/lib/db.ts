// src/lib/db.ts
import { kv } from "@vercel/kv";
import { nanoid } from "nanoid";

const KV_REST_API_URL = process.env.KV_REST_API_URL;
const KV_REST_API_TOKEN = process.env.KV_REST_API_TOKEN;


if (!KV_REST_API_URL || !KV_REST_API_TOKEN) {
    throw new Error('Missing required environment variables KV_REST_API_URL and KV_REST_API_TOKEN');
}

export interface Paste {
    id: string;
    content: string;
    createdAt: Date;
}

export const savePaste = async (content: string) => {
    const id = nanoid();
    const createdAt = new Date();
    await kv.set(id, { content, createdAt });
    return id;
};

export const fetchPaste = async (id: string) => {
    return await kv.get(id);
};

export const deletePaste = async (id: string) => {
    console.log(`process.env.KV_REST_API_URL = ${process.env.KV_REST_API_URL}`);



    return await kv.del(id);
};
