// src/lib/db.ts
import { kv } from "@vercel/kv";
import { nanoid } from "nanoid";
import { PasteData } from "@/types/paste";

const KV_REST_API_URL = process.env.KV_REST_API_URL;
const KV_REST_API_TOKEN = process.env.KV_REST_API_TOKEN;

if (!KV_REST_API_URL || !KV_REST_API_TOKEN) {
  throw new Error(
    "Missing required environment variables KV_REST_API_URL and KV_REST_API_TOKEN"
  );
}

export const savePaste = async (
  content: string,
  expires: string
): Promise<string> => {
  const id = nanoid();
  const createdAt = Date.now();

  const expirationTime = 1000 * 60 * 60 * 24 * 7; // 1 week
  const PasteData: PasteData = {
    content,
    createdAt,
    expiresAt: Date.now() + expirationTime,
  };

  await kv.set(id, PasteData);
  return id;
};

export const fetchPaste = async (id: string): Promise<PasteData | null> => {
  try {
    const result = await kv.get<PasteData>(id);

    if (!result) {
      return null;
    }

    return result;
  } catch (error) {
    console.error(`Error fetching paste ${id}:`, error);
    throw error; // Re-throw the error for the caller to handle
  }
};

export const deletePaste = async (id: string) => {
  console.log(`process.env.KV_REST_API_URL = ${process.env.KV_REST_API_URL}`);

  return await kv.del(id);
};
