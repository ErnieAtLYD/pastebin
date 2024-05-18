// src/app/paste/[id]/page.tsx
// This is a server component
import { fetchPaste } from '@/lib/db';
import { Pastebin } from '@/components/pastebin';

export default async function PastePage({ params }: { params: { id: string } }) {
    const paste = await fetchPaste(params.id);
    if (!paste) {
        return <div>not found</div>;
    }
    return <Pastebin handleSubmit={() => {}} value={paste.content} setValue={() => {}} />;
}
