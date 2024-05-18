// src/lib/db.ts
import { nanoid } from "nanoid";

const pastes = new Map();

export const savePaste = async (content: string) => {
    const id = nanoid();
    pastes.set(id, { content });
    return id;
};

export const fetchPaste = async (id: string) => {
    return pastes.get(id);
};