'use client'

import { Button } from "@/components/ui/button";
import { TrashIcon } from "@/components/metadata";
import { useState } from "react";

export function DeleteButton({ pasteId }: { pasteId: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const response = await fetch(`/api/paste/${pasteId}`, {
        method: 'DELETE',
      });
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

