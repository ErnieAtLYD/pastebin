// src/app/paste/[id]/page.tsx

// This is a server component shown on snippet read
import { fetchPaste, Paste } from '@/lib/db';
import { Metadata, TrashIcon } from '@/components/metadata';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { DeleteButton } from "@/components/deletebutton";

export default async function PastePage({ params }: { params: { id: string } }) {

  const paste: Paste | null = await fetchPaste(params.id) as Paste | null;

  if (!paste) {
    return <div>not found</div>;
  }

  console.log({ params, paste })

  return <>
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
          readOnly
        />
        <div className="flex items-center justify-between">
          <Button className="font-bold" type="submit">
            Create Paste
          </Button>
          <DeleteButton pasteId={paste.id} />
        </div>
      </div>
    </div>
    <Metadata id={params.id} createdAt={paste.createdAt} />
  </>;
}
