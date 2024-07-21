import { useState } from "react"
import { Textarea } from "@/components/ui/Textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/Select"
import { Button } from "@/components/ui/Button";

export function Pastebin({
  value,
  setValue,
  handleForm
}: {
  value: string;
  setValue: (value: string) => void;
  handleForm: (formData: FormData) => void;
}) {
  return (
    <>
      <div aria-live="assertive">{/* Error messages go here */}</div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <form
          aria-labelledby="formTitle"
          className="space-y-4"
          action={handleForm}
        >
          <h1 id="formTitle" className="text-2xl font-bold mb-4">
            Pastebin Clone
          </h1>
          <Textarea
            aria-label="Paste content"
            className="w-full h-40 resize-none rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 font-mono"
            name="pasteContent"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter your text here..."
            value={value}
          />
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 dark:text-gray-400">Expires:</span>
              <Select name="expires">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Select expiration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3600">1 hour</SelectItem>
                  <SelectItem value="604800">1 week</SelectItem>
                  <SelectItem value="2628288">1 month</SelectItem>
                  <SelectItem value="31536000">1 year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-auto font-bold">
              Create Paste
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
