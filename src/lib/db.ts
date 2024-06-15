// src/lib/db.ts
import { kv } from "@vercel/kv";
import { nanoid } from "nanoid";

export interface Paste {
    id: string;
    content: string;
    createdAt: Date;
}

export const savePaste = async (content: string) => {
    const id = nanoid();
    await kv.set(id, { content });
    return id;
};

export const fetchPaste = async (id: string) => {
    return await kv.get(id);
};

export const deletePaste = async (id: string) => {
    console.log(`process.env.KV_REST_API_URL = ${process.env.KV_REST_API_URL}`);


    
    return await kv.del(id);
};
