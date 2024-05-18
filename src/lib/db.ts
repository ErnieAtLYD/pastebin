// src/lib/db.ts
const pastes = new Map();

export const savePaste = async (content: string) => {
    const id = `${Math.random().toString(36).substring(2, 11)}`;
    pastes.set(id, { content });
    return id;
};

export const fetchPaste = async (id: string) => {
    return pastes.get(id);
};