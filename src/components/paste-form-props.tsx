import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";
import { TrashIcon } from "@/components/metadata";

interface PastebinFormProps {
  handleSubmit: (e: React.FormEvent) => void;
  value: string;
  setValue: (value: string) => void;
}

export function PastebinForm({ handleSubmit, value, setValue }: PastebinFormProps) {
  return (
    <form className="space-y-4" onSubmit={handleSubmit} aria-labelledby="formTitle">
      <h1 id="formTitle" className="text-2xl font-bold mb-4">Pastebin Clone</h1>
      <Textarea
        name="pasteContent"
        aria-label="Paste content"
        className="w-full h-40 resize-none rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 font-mono"
        placeholder="Enter your text here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex items-center justify-between">
        <Button aria-label="Create paste" className="w-full font-bold" type="submit">
          Create Paste
        </Button>
        <Button className="font-bold" size="sm" variant="destructive">
          <TrashIcon className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </div>
    </form>

  );
}

