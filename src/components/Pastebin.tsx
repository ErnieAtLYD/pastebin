import { Textarea } from "@/components/ui/Textarea"
import { Button } from "@/components/ui/Button"

export function Pastebin({ handleSubmit, value, setValue }: {
  handleSubmit: (e: React.FormEvent) => void,
  value: string,
  setValue: (value: string) => void
}) {
  return (
    <>
      <div aria-live="assertive">
        {/* Error messages go here */}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <form
          aria-labelledby="formTitle"
          className="space-y-4"
          onSubmit={handleSubmit}>
          <h1
            id="formTitle"
            className="text-2xl font-bold mb-4">
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
          <div className="flex items-center justify-between">
            <Button className="font-bold" type="submit">
              Create Paste
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
