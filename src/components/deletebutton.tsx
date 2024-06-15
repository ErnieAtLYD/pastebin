'use client'

import { Button } from "@/components/ui/Button";
import { TrashIcon } from "@/components/Metadata";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deletePaste } from "@/lib/db";

export function DeleteButton({ pasteId }: { pasteId: string }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const resp = await deletePaste(pasteId);
      if (!resp) {
        throw new Error('Failed to delete paste');
      }
      // Handle successful deletion
      router.push('/');
    } catch (error) {
      console.error('Error deleting paste', error);
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <Button
      className="font-bold"
      size="sm"
      variant="destructive"
      onClick={handleDelete}
      disabled={isDeleting}
    >
      <TrashIcon className="h-4 w-4 mr-2" />
      {isDeleting ? 'Deleting...' : 'Delete'}
    </Button>
  )
}

