import { JSX, SVGProps } from "react";
import { Button } from "./ui/Button";

interface MetadataProps {
  id: string;
  createdAt: Date;
  appBaseUrl: string;
}

export const Metadata = ({id, appBaseUrl, createdAt}: MetadataProps) => {

  const generatedURL = `${appBaseUrl}/paste/${id}`;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
          <div>
            <h3 className="text-lg font-medium">Paste Details</h3>
            <div className="mt-2 flex items-center space-x-2">
              <span className="text-gray-500 dark:text-gray-400">URL:</span>
              <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-mono">
                {generatedURL}
              </div>
              <Button className="font-bold" size="sm" variant="ghost">
                <CopyIcon className="h-4 w-4" />
                <span className="sr-only">Copy URL</span>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Metadata</h3>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 dark:text-gray-400">Views:</span>
                <span className="font-mono">0</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 dark:text-gray-400">Created:</span>
                <span className="font-mono">{createdAt?.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 dark:text-gray-400">Expires:</span>
                <span className="font-mono">1 week</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 dark:text-gray-400">Syntax:</span>
                <span className="font-mono">Plain Text</span>
              </div>
            </div>
          </div>
        </div>
    )
}

function CopyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
    )
  }

export function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </svg>
    )
  }
