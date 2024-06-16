'use client'

import { Button } from "@/components/ui/Button";
import { TrashIcon } from "@/components/Metadata";
import { useState } from "react";
import { deletePaste } from "@/lib/db";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export async function handleDelete(pasteId: string, router: AppRouterInstance, setIsDeleting: (isDeleting: boolean) => void) {
  
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
}

export function DeleteButton({ pasteId }: { pasteId: string }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <Button
      className="font-bold"
      size="sm"
      variant="destructive"
      onClick={() => handleDelete(pasteId, router, setIsDeleting)}
      disabled={isDeleting}
    >
      <TrashIcon className="h-4 w-4 mr-2" />
      {isDeleting ? 'Deleting...' : 'Delete'}
    </Button>
  )
}

