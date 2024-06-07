import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "@/components/deletebutton";


interface PastebinFormProps {
  handleSubmit: (e: React.FormEvent) => void;
  value: string;
  setValue: (value: string) => void;
  pasteId: string;
}

export function PastebinForm({ handleSubmit, value, setValue, pasteId }: PastebinFormProps) {

  // const handleDelete = async () => {
  //   setIsDeleting(true);
  //   try {
  //     // await fetch(`/api/paste/${id}`, { method: 'DELETE' });
  //     const response = await fetch('/api/paste', {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ id: pasteId }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to delete paste');
  //     }

  //     // Handle successful deletion (e.g., redirect or clear form)
  //     console.log('Paste deleted successfully');      
  //   } catch (error) {
  //     console.error('Error deleting paste', error);
  //   } finally {
  //     setIsDeleting(false);
  //   }
  // };

  return (
    <form 
      className="space-y-4" 
      onSubmit={handleSubmit} 
      aria-labelledby="formTitle"
    >
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
        <DeleteButton pasteId={pasteId} />
        {/* <Button className="font-bold" size="sm" variant="destructive" onClick={handleDelete} disabled={isDeleting}>
          <TrashIcon className="h-4 w-4 mr-2" />
          {isDeleting ? 'Deleting...' : 'Delete'}
        </Button> */}
      </div>
    </form>

  );
}

