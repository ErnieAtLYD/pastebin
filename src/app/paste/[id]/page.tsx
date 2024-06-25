// src/app/paste/[id]/page.tsx

// This is a server component shown on snippet read
import { fetchPaste, Paste } from '@/lib/db';
import { Metadata } from '@/components/Metadata';
import { Textarea } from "@/components/ui/Textarea"
import { Button } from "@/components/ui/Button"
import { DeleteButton } from "@/components/DeleteButton";

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
        <h1 
          className="text-2xl font-bold mb-4"
          id="formTitle">
          Pastebin Clone
        </h1>
        <Textarea
          aria-label="Paste content"
          className="w-full h-40 resize-none rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 font-mono"
          name="pasteContent"
          placeholder="Enter your text here..."
          readOnly
          value={paste.content}
        />
        <div className="flex items-center justify-between">
          <DeleteButton pasteId={params.id} />
        </div>
      </div>
    </div>
    <Metadata 
      id={params.id} 
      createdAt={paste.createdAt} 
      appBaseUrl={process.env.BASE_URL || ''} />
  </>;
}
