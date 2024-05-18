// src/app/paste/[id]/page.tsx
// This is a server component
import { fetchPaste } from '@/lib/db';
import { Metadata } from '@/components/metadata';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default async function PastePage({ params }: { params: { id: string } }) {
    const paste = await fetchPaste(params.id);
    if (!paste) {
        return <div>not found</div>;
    }
    return <div className="w-full max-w-md space-y-4">
      <div aria-live="assertive">
        {/* Error messages go here */}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="space-y-4" aria-labelledby="divTitle">
          <h1 id="formTitle" className="text-2xl font-bold mb-4">Pastebin Clone</h1>
          <Textarea
            name="pasteContent"
            aria-label="Paste content"
            className="w-full h-40 resize-none rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 font-mono"
            placeholder="Enter your text here..."
            value={paste.content}
          />
          <Button aria-label="Create paste" className="w-full font-bold" type="button" disabled>
            Create Paste
          </Button>
        </div>
      </div>
        <Metadata />
    </div>;
}
